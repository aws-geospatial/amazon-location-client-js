// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export * from "@aws-sdk/client-location";
export * from "@aws-sdk/credential-providers";

import {
  withAPIKey,
  withCredentialProvider,
  withIdentityPoolId,
} from "@aws/amazon-location-utilities-auth-helper";

import * as maps from "@aws-sdk/client-geo-maps";
import { GeoMapsClient } from "@aws-sdk/client-geo-maps";

import * as places from "@aws-sdk/client-geo-places";
import { GeoPlacesClient } from "@aws-sdk/client-geo-places";

import * as routes from "@aws-sdk/client-geo-routes";
import { GeoRoutesClient } from "@aws-sdk/client-geo-routes";

export {
  withAPIKey,
  withCredentialProvider,
  withIdentityPoolId,
  GeoMapsClient,
  GeoPlacesClient,
  GeoRoutesClient,
  maps,
  places,
  routes,
};
