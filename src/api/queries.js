import { gql } from "@apollo/client";

export const GET_PAST_LAUNCHES = gql`
  query GetPastLaunches($limit: Int!, $offset: Int!) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
      static_fire_date_utc
    }
  }
`;

export const GET_FLEETS = gql`
  query GetFLeets {
    rockets {
      id
    }
    ships {
      id
    }
    capsules {
      id
    }
    roadster {
      period_days
    }
  }
`;
