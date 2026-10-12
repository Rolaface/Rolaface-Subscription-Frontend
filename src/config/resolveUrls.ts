export interface AppUrls {
  apiBaseUrl: string;
  subscriptionFrontendUrl: string;
}

export const resolveAppUrls = (): AppUrls => {
  const fallbacks: AppUrls = {
    apiBaseUrl: (import.meta.env.VITE_API_BASE_URL ?? "") as string,
    subscriptionFrontendUrl: (import.meta.env.VITE_SUB_URL ?? "") as string,
  };

  if (typeof window === "undefined") {
    return fallbacks;
  }

  const { protocol, hostname } = window.location;
  
  if (
    hostname === "localhost" ||
    hostname.startsWith("127.") ||
    hostname.endsWith(".local")
  ) {
    return fallbacks;
  }

  const hostSegments = hostname.split(".");
  if (hostSegments.length < 3) {
    return fallbacks;
  }

  const tenantSubdomain = hostSegments[0]; 
  const baseDomain = hostSegments.slice(-2).join("."); 
  
  const isValidTenant = /^[a-z0-9-]+$/i.test(tenantSubdomain);
  if (!isValidTenant) {
    return fallbacks;
  }

  return {
    apiBaseUrl: `${protocol}//api.sub.${tenantSubdomain}.${baseDomain}`,
    subscriptionFrontendUrl: `${protocol}//${tenantSubdomain}.sub.${baseDomain}`,
  };
};

export const { 
  apiBaseUrl: SUB_BASE, 
  subscriptionFrontendUrl: SUB_FRONTEND, 
} = resolveAppUrls();