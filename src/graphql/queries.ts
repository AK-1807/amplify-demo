/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getIntroduction = /* GraphQL */ `query GetIntroduction($id: ID!) {
  getIntroduction(id: $id) {
    id
    Eyebrow
    Title
    Subtitle
    pageID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetIntroductionQueryVariables,
  APITypes.GetIntroductionQuery
>;
export const listIntroductions = /* GraphQL */ `query ListIntroductions(
  $filter: ModelIntroductionFilterInput
  $limit: Int
  $nextToken: String
) {
  listIntroductions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Eyebrow
      Title
      Subtitle
      pageID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIntroductionsQueryVariables,
  APITypes.ListIntroductionsQuery
>;
export const introductionsByPageID = /* GraphQL */ `query IntroductionsByPageID(
  $pageID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelIntroductionFilterInput
  $limit: Int
  $nextToken: String
) {
  introductionsByPageID(
    pageID: $pageID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      Eyebrow
      Title
      Subtitle
      pageID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.IntroductionsByPageIDQueryVariables,
  APITypes.IntroductionsByPageIDQuery
>;
export const getSections = /* GraphQL */ `query GetSections($id: ID!) {
  getSections(id: $id) {
    id
    HeroBanner {
      id
      Title
      SubTitle
      Background_Image
      pageID
      createdAt
      updatedAt
      __typename
    }
    Introductions {
      id
      Eyebrow
      Title
      Subtitle
      pageID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    sectionsHeroBannerId
    sectionsIntroductionsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSectionsQueryVariables,
  APITypes.GetSectionsQuery
>;
export const listSections = /* GraphQL */ `query ListSections(
  $filter: ModelSectionsFilterInput
  $limit: Int
  $nextToken: String
) {
  listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      sectionsHeroBannerId
      sectionsIntroductionsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSectionsQueryVariables,
  APITypes.ListSectionsQuery
>;
export const getPage = /* GraphQL */ `query GetPage($id: ID!) {
  getPage(id: $id) {
    id
    Title
    slug
    HeroBanner {
      nextToken
      __typename
    }
    Introductions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPageQueryVariables, APITypes.GetPageQuery>;
export const listPages = /* GraphQL */ `query ListPages(
  $filter: ModelPageFilterInput
  $limit: Int
  $nextToken: String
) {
  listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Title
      slug
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPagesQueryVariables, APITypes.ListPagesQuery>;
export const getHeroBanner = /* GraphQL */ `query GetHeroBanner($id: ID!) {
  getHeroBanner(id: $id) {
    id
    Title
    SubTitle
    Background_Image
    pageID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetHeroBannerQueryVariables,
  APITypes.GetHeroBannerQuery
>;
export const listHeroBanners = /* GraphQL */ `query ListHeroBanners(
  $filter: ModelHeroBannerFilterInput
  $limit: Int
  $nextToken: String
) {
  listHeroBanners(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Title
      SubTitle
      Background_Image
      pageID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHeroBannersQueryVariables,
  APITypes.ListHeroBannersQuery
>;
export const heroBannersByPageID = /* GraphQL */ `query HeroBannersByPageID(
  $pageID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelHeroBannerFilterInput
  $limit: Int
  $nextToken: String
) {
  heroBannersByPageID(
    pageID: $pageID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      Title
      SubTitle
      Background_Image
      pageID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.HeroBannersByPageIDQueryVariables,
  APITypes.HeroBannersByPageIDQuery
>;
