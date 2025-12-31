/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateIntroduction = /* GraphQL */ `subscription OnCreateIntroduction(
  $filter: ModelSubscriptionIntroductionFilterInput
) {
  onCreateIntroduction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateIntroductionSubscriptionVariables,
  APITypes.OnCreateIntroductionSubscription
>;
export const onUpdateIntroduction = /* GraphQL */ `subscription OnUpdateIntroduction(
  $filter: ModelSubscriptionIntroductionFilterInput
) {
  onUpdateIntroduction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateIntroductionSubscriptionVariables,
  APITypes.OnUpdateIntroductionSubscription
>;
export const onDeleteIntroduction = /* GraphQL */ `subscription OnDeleteIntroduction(
  $filter: ModelSubscriptionIntroductionFilterInput
) {
  onDeleteIntroduction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteIntroductionSubscriptionVariables,
  APITypes.OnDeleteIntroductionSubscription
>;
export const onCreateSections = /* GraphQL */ `subscription OnCreateSections($filter: ModelSubscriptionSectionsFilterInput) {
  onCreateSections(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSectionsSubscriptionVariables,
  APITypes.OnCreateSectionsSubscription
>;
export const onUpdateSections = /* GraphQL */ `subscription OnUpdateSections($filter: ModelSubscriptionSectionsFilterInput) {
  onUpdateSections(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSectionsSubscriptionVariables,
  APITypes.OnUpdateSectionsSubscription
>;
export const onDeleteSections = /* GraphQL */ `subscription OnDeleteSections($filter: ModelSubscriptionSectionsFilterInput) {
  onDeleteSections(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSectionsSubscriptionVariables,
  APITypes.OnDeleteSectionsSubscription
>;
export const onCreatePage = /* GraphQL */ `subscription OnCreatePage($filter: ModelSubscriptionPageFilterInput) {
  onCreatePage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePageSubscriptionVariables,
  APITypes.OnCreatePageSubscription
>;
export const onUpdatePage = /* GraphQL */ `subscription OnUpdatePage($filter: ModelSubscriptionPageFilterInput) {
  onUpdatePage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePageSubscriptionVariables,
  APITypes.OnUpdatePageSubscription
>;
export const onDeletePage = /* GraphQL */ `subscription OnDeletePage($filter: ModelSubscriptionPageFilterInput) {
  onDeletePage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePageSubscriptionVariables,
  APITypes.OnDeletePageSubscription
>;
export const onCreateHeroBanner = /* GraphQL */ `subscription OnCreateHeroBanner(
  $filter: ModelSubscriptionHeroBannerFilterInput
) {
  onCreateHeroBanner(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateHeroBannerSubscriptionVariables,
  APITypes.OnCreateHeroBannerSubscription
>;
export const onUpdateHeroBanner = /* GraphQL */ `subscription OnUpdateHeroBanner(
  $filter: ModelSubscriptionHeroBannerFilterInput
) {
  onUpdateHeroBanner(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateHeroBannerSubscriptionVariables,
  APITypes.OnUpdateHeroBannerSubscription
>;
export const onDeleteHeroBanner = /* GraphQL */ `subscription OnDeleteHeroBanner(
  $filter: ModelSubscriptionHeroBannerFilterInput
) {
  onDeleteHeroBanner(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteHeroBannerSubscriptionVariables,
  APITypes.OnDeleteHeroBannerSubscription
>;
