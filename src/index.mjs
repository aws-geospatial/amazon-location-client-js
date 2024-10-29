export * from "@aws-sdk/client-location";
export * from "@aws-sdk/credential-providers";

import {
  withAPIKey,
  withIdentityPoolId,
} from "@aws/amazon-location-utilities-auth-helper";

import * as maps from "@aws-sdk/geo-maps-client";
import { GeoMapsClient } from "@aws-sdk/geo-maps-client";

import * as places from "@aws-sdk/geo-places-client";
import { GeoPlacesClient } from "@aws-sdk/geo-places-client";

import * as routes from "@aws-sdk/geo-routes-client";
import { GeoRoutesClient } from "@aws-sdk/geo-routes-client";

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
