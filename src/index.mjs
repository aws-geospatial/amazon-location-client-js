export * from "@aws-sdk/client-location";
export * from "@aws-sdk/credential-providers";

import {
  withAPIKey,
  withIdentityPoolId,
} from "@aws/amazon-location-utilities-auth-helper";

import * as maps from "@amzn/geomaps-client";
import { GeoMapsClient } from "@amzn/geomaps-client";

import * as places from "@amzn/geoplaces-client";
import { GeoPlacesClient } from "@amzn/geoplaces-client";

import * as routes from "@amzn/georoutes-client";
import { GeoRoutesClient } from "@amzn/georoutes-client";

export {
  withAPIKey,
  withIdentityPoolId,
  GeoMapsClient,
  GeoPlacesClient,
  GeoRoutesClient,
  maps,
  places,
  routes,
};
