enum Service {
  USERS = "USERS",
  HEXATHONS = "HEXATHONS",
  NOTIFICATIONS = "NOTIFICATIONS",
  REGISTRATION = "REGISTRATION",
  FILES = "FILES",
  AUTH = "AUTH",
  EXPO = "EXPO",
  HARDWARE = "HARDWARE",
  FINANCE = "FINANCE",
}

const DEVELOPMENT_SERVICE_URLS = {
  [Service.USERS]: "http://localhost:8001",
  [Service.HEXATHONS]: "http://localhost:8002",
  [Service.NOTIFICATIONS]: "http://localhost:8003",
  [Service.REGISTRATION]: "http://localhost:8004",
  [Service.FILES]: "http://localhost:8005",
  [Service.AUTH]: "http://localhost:8006",
  [Service.EXPO]: "http://localhost:8007",
  [Service.HARDWARE]: "http://localhost:8008",
  [Service.FINANCE]: "http://localhost:8009",
};

const PRODUCTION_SERVICE_URLS = {
  [Service.USERS]: "https://users.api.hexlabs.org",
  [Service.HEXATHONS]: "https://hexathons.api.hexlabs.org",
  [Service.NOTIFICATIONS]: "https://notifications.api.hexlabs.org",
  [Service.REGISTRATION]: "https://registration.api.hexlabs.org",
  [Service.FILES]: "https://files.api.hexlabs.org",
  [Service.AUTH]: "https://auth.api.hexlabs.org",
  [Service.EXPO]: "https://expo.api.hexlabs.org",
  [Service.HARDWARE]: "https://hardware.api.hexlabs.org",
  [Service.FINANCE]: "https://finance.api.hexlabs.org",
};

/**
 * Gets the request URL for a given service and path based on the api environment.
 * This is used to query the development or production API.
 * @param service The service to get the URL for
 * @param path The relative path URl for the service
 * @returns The complete request URL
 */
const apiUrl = (service: Service, path: string) => {
  if (process.env.REACT_APP_API_ENVIRONMENT === "PRODUCTION") {
    return new URL(path, PRODUCTION_SERVICE_URLS[service]).toString();
  }
  if (process.env.REACT_APP_API_ENVIRONMENT === "DEVELOPMENT") {
    return new URL(path, DEVELOPMENT_SERVICE_URLS[service]).toString();
  }
  throw new Error("Invalid API environment");
};

export { Service, apiUrl };
