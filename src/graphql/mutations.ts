/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createIntroduction = /* GraphQL */ `mutation CreateIntroduction(
  $input: CreateIntroductionInput!
  $condition: ModelIntroductionConditionInput
) {
  createIntroduction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateIntroductionMutationVariables,
  APITypes.CreateIntroductionMutation
>;
export const updateIntroduction = /* GraphQL */ `mutation UpdateIntroduction(
  $input: UpdateIntroductionInput!
  $condition: ModelIntroductionConditionInput
) {
  updateIntroduction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateIntroductionMutationVariables,
  APITypes.UpdateIntroductionMutation
>;
export const deleteIntroduction = /* GraphQL */ `mutation DeleteIntroduction(
  $input: DeleteIntroductionInput!
  $condition: ModelIntroductionConditionInput
) {
  deleteIntroduction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteIntroductionMutationVariables,
  APITypes.DeleteIntroductionMutation
>;
export const createSections = /* GraphQL */ `mutation CreateSections(
  $input: CreateSectionsInput!
  $condition: ModelSectionsConditionInput
) {
  createSections(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSectionsMutationVariables,
  APITypes.CreateSectionsMutation
>;
export const updateSections = /* GraphQL */ `mutation UpdateSections(
  $input: UpdateSectionsInput!
  $condition: ModelSectionsConditionInput
) {
  updateSections(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSectionsMutationVariables,
  APITypes.UpdateSectionsMutation
>;
export const deleteSections = /* GraphQL */ `mutation DeleteSections(
  $input: DeleteSectionsInput!
  $condition: ModelSectionsConditionInput
) {
  deleteSections(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSectionsMutationVariables,
  APITypes.DeleteSectionsMutation
>;
export const createPage = /* GraphQL */ `mutation CreatePage(
  $input: CreatePageInput!
  $condition: ModelPageConditionInput
) {
  createPage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePageMutationVariables,
  APITypes.CreatePageMutation
>;
export const updatePage = /* GraphQL */ `mutation UpdatePage(
  $input: UpdatePageInput!
  $condition: ModelPageConditionInput
) {
  updatePage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePageMutationVariables,
  APITypes.UpdatePageMutation
>;
export const deletePage = /* GraphQL */ `mutation DeletePage(
  $input: DeletePageInput!
  $condition: ModelPageConditionInput
) {
  deletePage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePageMutationVariables,
  APITypes.DeletePageMutation
>;
export const createHeroBanner = /* GraphQL */ `mutation CreateHeroBanner(
  $input: CreateHeroBannerInput!
  $condition: ModelHeroBannerConditionInput
) {
  createHeroBanner(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateHeroBannerMutationVariables,
  APITypes.CreateHeroBannerMutation
>;
export const updateHeroBanner = /* GraphQL */ `mutation UpdateHeroBanner(
  $input: UpdateHeroBannerInput!
  $condition: ModelHeroBannerConditionInput
) {
  updateHeroBanner(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateHeroBannerMutationVariables,
  APITypes.UpdateHeroBannerMutation
>;
export const deleteHeroBanner = /* GraphQL */ `mutation DeleteHeroBanner(
  $input: DeleteHeroBannerInput!
  $condition: ModelHeroBannerConditionInput
) {
  deleteHeroBanner(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteHeroBannerMutationVariables,
  APITypes.DeleteHeroBannerMutation
>;
