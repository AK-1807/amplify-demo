/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateIntroductionInput = {
  id?: string | null,
  Eyebrow?: string | null,
  Title?: string | null,
  Subtitle?: string | null,
  pageID: string,
};

export type ModelIntroductionConditionInput = {
  Eyebrow?: ModelStringInput | null,
  Title?: ModelStringInput | null,
  Subtitle?: ModelStringInput | null,
  pageID?: ModelIDInput | null,
  and?: Array< ModelIntroductionConditionInput | null > | null,
  or?: Array< ModelIntroductionConditionInput | null > | null,
  not?: ModelIntroductionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Introduction = {
  __typename: "Introduction",
  id: string,
  Eyebrow?: string | null,
  Title?: string | null,
  Subtitle?: string | null,
  pageID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateIntroductionInput = {
  id: string,
  Eyebrow?: string | null,
  Title?: string | null,
  Subtitle?: string | null,
  pageID?: string | null,
};

export type DeleteIntroductionInput = {
  id: string,
};

export type CreateSectionsInput = {
  id?: string | null,
  sectionsHeroBannerId?: string | null,
  sectionsIntroductionsId?: string | null,
};

export type ModelSectionsConditionInput = {
  and?: Array< ModelSectionsConditionInput | null > | null,
  or?: Array< ModelSectionsConditionInput | null > | null,
  not?: ModelSectionsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  sectionsHeroBannerId?: ModelIDInput | null,
  sectionsIntroductionsId?: ModelIDInput | null,
};

export type Sections = {
  __typename: "Sections",
  id: string,
  HeroBanner?: HeroBanner | null,
  Introductions?: Introduction | null,
  createdAt: string,
  updatedAt: string,
  sectionsHeroBannerId?: string | null,
  sectionsIntroductionsId?: string | null,
};

export type HeroBanner = {
  __typename: "HeroBanner",
  id: string,
  Title?: string | null,
  SubTitle?: string | null,
  Background_Image?: string | null,
  pageID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSectionsInput = {
  id: string,
  sectionsHeroBannerId?: string | null,
  sectionsIntroductionsId?: string | null,
};

export type DeleteSectionsInput = {
  id: string,
};

export type CreatePageInput = {
  id?: string | null,
  Title?: string | null,
  slug?: string | null,
};

export type ModelPageConditionInput = {
  Title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  and?: Array< ModelPageConditionInput | null > | null,
  or?: Array< ModelPageConditionInput | null > | null,
  not?: ModelPageConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Page = {
  __typename: "Page",
  id: string,
  Title?: string | null,
  slug?: string | null,
  HeroBanner?: ModelHeroBannerConnection | null,
  Introductions?: ModelIntroductionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelHeroBannerConnection = {
  __typename: "ModelHeroBannerConnection",
  items:  Array<HeroBanner | null >,
  nextToken?: string | null,
};

export type ModelIntroductionConnection = {
  __typename: "ModelIntroductionConnection",
  items:  Array<Introduction | null >,
  nextToken?: string | null,
};

export type UpdatePageInput = {
  id: string,
  Title?: string | null,
  slug?: string | null,
};

export type DeletePageInput = {
  id: string,
};

export type CreateHeroBannerInput = {
  id?: string | null,
  Title?: string | null,
  SubTitle?: string | null,
  Background_Image?: string | null,
  pageID: string,
};

export type ModelHeroBannerConditionInput = {
  Title?: ModelStringInput | null,
  SubTitle?: ModelStringInput | null,
  Background_Image?: ModelStringInput | null,
  pageID?: ModelIDInput | null,
  and?: Array< ModelHeroBannerConditionInput | null > | null,
  or?: Array< ModelHeroBannerConditionInput | null > | null,
  not?: ModelHeroBannerConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateHeroBannerInput = {
  id: string,
  Title?: string | null,
  SubTitle?: string | null,
  Background_Image?: string | null,
  pageID?: string | null,
};

export type DeleteHeroBannerInput = {
  id: string,
};

export type ModelIntroductionFilterInput = {
  id?: ModelIDInput | null,
  Eyebrow?: ModelStringInput | null,
  Title?: ModelStringInput | null,
  Subtitle?: ModelStringInput | null,
  pageID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelIntroductionFilterInput | null > | null,
  or?: Array< ModelIntroductionFilterInput | null > | null,
  not?: ModelIntroductionFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSectionsFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSectionsFilterInput | null > | null,
  or?: Array< ModelSectionsFilterInput | null > | null,
  not?: ModelSectionsFilterInput | null,
  sectionsHeroBannerId?: ModelIDInput | null,
  sectionsIntroductionsId?: ModelIDInput | null,
};

export type ModelSectionsConnection = {
  __typename: "ModelSectionsConnection",
  items:  Array<Sections | null >,
  nextToken?: string | null,
};

export type ModelPageFilterInput = {
  id?: ModelIDInput | null,
  Title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPageFilterInput | null > | null,
  or?: Array< ModelPageFilterInput | null > | null,
  not?: ModelPageFilterInput | null,
};

export type ModelPageConnection = {
  __typename: "ModelPageConnection",
  items:  Array<Page | null >,
  nextToken?: string | null,
};

export type ModelHeroBannerFilterInput = {
  id?: ModelIDInput | null,
  Title?: ModelStringInput | null,
  SubTitle?: ModelStringInput | null,
  Background_Image?: ModelStringInput | null,
  pageID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelHeroBannerFilterInput | null > | null,
  or?: Array< ModelHeroBannerFilterInput | null > | null,
  not?: ModelHeroBannerFilterInput | null,
};

export type ModelSubscriptionIntroductionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Eyebrow?: ModelSubscriptionStringInput | null,
  Title?: ModelSubscriptionStringInput | null,
  Subtitle?: ModelSubscriptionStringInput | null,
  pageID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionIntroductionFilterInput | null > | null,
  or?: Array< ModelSubscriptionIntroductionFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSectionsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSectionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionSectionsFilterInput | null > | null,
  sectionsHeroBannerId?: ModelSubscriptionIDInput | null,
  sectionsIntroductionsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionPageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Title?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPageFilterInput | null > | null,
  or?: Array< ModelSubscriptionPageFilterInput | null > | null,
};

export type ModelSubscriptionHeroBannerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Title?: ModelSubscriptionStringInput | null,
  SubTitle?: ModelSubscriptionStringInput | null,
  Background_Image?: ModelSubscriptionStringInput | null,
  pageID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHeroBannerFilterInput | null > | null,
  or?: Array< ModelSubscriptionHeroBannerFilterInput | null > | null,
};

export type CreateIntroductionMutationVariables = {
  input: CreateIntroductionInput,
  condition?: ModelIntroductionConditionInput | null,
};

export type CreateIntroductionMutation = {
  createIntroduction?:  {
    __typename: "Introduction",
    id: string,
    Eyebrow?: string | null,
    Title?: string | null,
    Subtitle?: string | null,
    pageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIntroductionMutationVariables = {
  input: UpdateIntroductionInput,
  condition?: ModelIntroductionConditionInput | null,
};

export type UpdateIntroductionMutation = {
  updateIntroduction?:  {
    __typename: "Introduction",
    id: string,
    Eyebrow?: string | null,
    Title?: string | null,
    Subtitle?: string | null,
    pageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIntroductionMutationVariables = {
  input: DeleteIntroductionInput,
  condition?: ModelIntroductionConditionInput | null,
};

export type DeleteIntroductionMutation = {
  deleteIntroduction?:  {
    __typename: "Introduction",
    id: string,
    Eyebrow?: string | null,
    Title?: string | null,
    Subtitle?: string | null,
    pageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSectionsMutationVariables = {
  input: CreateSectionsInput,
  condition?: ModelSectionsConditionInput | null,
};

export type CreateSectionsMutation = {
  createSections?:  {
    __typename: "Sections",
    id: string,
    HeroBanner?:  {
      __typename: "HeroBanner",
      id: string,
      Title?: string | null,
      SubTitle?: string | null,
      Background_Image?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Introductions?:  {
      __typename: "Introduction",
      id: string,
      Eyebrow?: string | null,
      Title?: string | null,
      Subtitle?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    sectionsHeroBannerId?: string | null,
    sectionsIntroductionsId?: string | null,
  } | null,
};

export type UpdateSectionsMutationVariables = {
  input: UpdateSectionsInput,
  condition?: ModelSectionsConditionInput | null,
};

export type UpdateSectionsMutation = {
  updateSections?:  {
    __typename: "Sections",
    id: string,
    HeroBanner?:  {
      __typename: "HeroBanner",
      id: string,
      Title?: string | null,
      SubTitle?: string | null,
      Background_Image?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Introductions?:  {
      __typename: "Introduction",
      id: string,
      Eyebrow?: string | null,
      Title?: string | null,
      Subtitle?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    sectionsHeroBannerId?: string | null,
    sectionsIntroductionsId?: string | null,
  } | null,
};

export type DeleteSectionsMutationVariables = {
  input: DeleteSectionsInput,
  condition?: ModelSectionsConditionInput | null,
};

export type DeleteSectionsMutation = {
  deleteSections?:  {
    __typename: "Sections",
    id: string,
    HeroBanner?:  {
      __typename: "HeroBanner",
      id: string,
      Title?: string | null,
      SubTitle?: string | null,
      Background_Image?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Introductions?:  {
      __typename: "Introduction",
      id: string,
      Eyebrow?: string | null,
      Title?: string | null,
      Subtitle?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    sectionsHeroBannerId?: string | null,
    sectionsIntroductionsId?: string | null,
  } | null,
};

export type CreatePageMutationVariables = {
  input: CreatePageInput,
  condition?: ModelPageConditionInput | null,
};

export type CreatePageMutation = {
  createPage?:  {
    __typename: "Page",
    id: string,
    Title?: string | null,
    slug?: string | null,
    HeroBanner?:  {
      __typename: "ModelHeroBannerConnection",
      nextToken?: string | null,
    } | null,
    Introductions?:  {
      __typename: "ModelIntroductionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePageMutationVariables = {
  input: UpdatePageInput,
  condition?: ModelPageConditionInput | null,
};

export type UpdatePageMutation = {
  updatePage?:  {
    __typename: "Page",
    id: string,
    Title?: string | null,
    slug?: string | null,
    HeroBanner?:  {
      __typename: "ModelHeroBannerConnection",
      nextToken?: string | null,
    } | null,
    Introductions?:  {
      __typename: "ModelIntroductionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePageMutationVariables = {
  input: DeletePageInput,
  condition?: ModelPageConditionInput | null,
};

export type DeletePageMutation = {
  deletePage?:  {
    __typename: "Page",
    id: string,
    Title?: string | null,
    slug?: string | null,
    HeroBanner?:  {
      __typename: "ModelHeroBannerConnection",
      nextToken?: string | null,
    } | null,
    Introductions?:  {
      __typename: "ModelIntroductionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHeroBannerMutationVariables = {
  input: CreateHeroBannerInput,
  condition?: ModelHeroBannerConditionInput | null,
};

export type CreateHeroBannerMutation = {
  createHeroBanner?:  {
    __typename: "HeroBanner",
    id: string,
    Title?: string | null,
    SubTitle?: string | null,
    Background_Image?: string | null,
    pageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHeroBannerMutationVariables = {
  input: UpdateHeroBannerInput,
  condition?: ModelHeroBannerConditionInput | null,
};

export type UpdateHeroBannerMutation = {
  updateHeroBanner?:  {
    __typename: "HeroBanner",
    id: string,
    Title?: string | null,
    SubTitle?: string | null,
    Background_Image?: string | null,
    pageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHeroBannerMutationVariables = {
  input: DeleteHeroBannerInput,
  condition?: ModelHeroBannerConditionInput | null,
};

export type DeleteHeroBannerMutation = {
  deleteHeroBanner?:  {
    __typename: "HeroBanner",
    id: string,
    Title?: string | null,
    SubTitle?: string | null,
    Background_Image?: string | null,
    pageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetIntroductionQueryVariables = {
  id: string,
};

export type GetIntroductionQuery = {
  getIntroduction?:  {
    __typename: "Introduction",
    id: string,
    Eyebrow?: string | null,
    Title?: string | null,
    Subtitle?: string | null,
    pageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIntroductionsQueryVariables = {
  filter?: ModelIntroductionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIntroductionsQuery = {
  listIntroductions?:  {
    __typename: "ModelIntroductionConnection",
    items:  Array< {
      __typename: "Introduction",
      id: string,
      Eyebrow?: string | null,
      Title?: string | null,
      Subtitle?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type IntroductionsByPageIDQueryVariables = {
  pageID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelIntroductionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type IntroductionsByPageIDQuery = {
  introductionsByPageID?:  {
    __typename: "ModelIntroductionConnection",
    items:  Array< {
      __typename: "Introduction",
      id: string,
      Eyebrow?: string | null,
      Title?: string | null,
      Subtitle?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSectionsQueryVariables = {
  id: string,
};

export type GetSectionsQuery = {
  getSections?:  {
    __typename: "Sections",
    id: string,
    HeroBanner?:  {
      __typename: "HeroBanner",
      id: string,
      Title?: string | null,
      SubTitle?: string | null,
      Background_Image?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Introductions?:  {
      __typename: "Introduction",
      id: string,
      Eyebrow?: string | null,
      Title?: string | null,
      Subtitle?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    sectionsHeroBannerId?: string | null,
    sectionsIntroductionsId?: string | null,
  } | null,
};

export type ListSectionsQueryVariables = {
  filter?: ModelSectionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSectionsQuery = {
  listSections?:  {
    __typename: "ModelSectionsConnection",
    items:  Array< {
      __typename: "Sections",
      id: string,
      createdAt: string,
      updatedAt: string,
      sectionsHeroBannerId?: string | null,
      sectionsIntroductionsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPageQueryVariables = {
  id: string,
};

export type GetPageQuery = {
  getPage?:  {
    __typename: "Page",
    id: string,
    Title?: string | null,
    slug?: string | null,
    HeroBanner?:  {
      __typename: "ModelHeroBannerConnection",
      nextToken?: string | null,
    } | null,
    Introductions?:  {
      __typename: "ModelIntroductionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPagesQueryVariables = {
  filter?: ModelPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPagesQuery = {
  listPages?:  {
    __typename: "ModelPageConnection",
    items:  Array< {
      __typename: "Page",
      id: string,
      Title?: string | null,
      slug?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHeroBannerQueryVariables = {
  id: string,
};

export type GetHeroBannerQuery = {
  getHeroBanner?:  {
    __typename: "HeroBanner",
    id: string,
    Title?: string | null,
    SubTitle?: string | null,
    Background_Image?: string | null,
    pageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHeroBannersQueryVariables = {
  filter?: ModelHeroBannerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHeroBannersQuery = {
  listHeroBanners?:  {
    __typename: "ModelHeroBannerConnection",
    items:  Array< {
      __typename: "HeroBanner",
      id: string,
      Title?: string | null,
      SubTitle?: string | null,
      Background_Image?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type HeroBannersByPageIDQueryVariables = {
  pageID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelHeroBannerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type HeroBannersByPageIDQuery = {
  heroBannersByPageID?:  {
    __typename: "ModelHeroBannerConnection",
    items:  Array< {
      __typename: "HeroBanner",
      id: string,
      Title?: string | null,
      SubTitle?: string | null,
      Background_Image?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateIntroductionSubscriptionVariables = {
  filter?: ModelSubscriptionIntroductionFilterInput | null,
};

export type OnCreateIntroductionSubscription = {
  onCreateIntroduction?:  {
    __typename: "Introduction",
    id: string,
    Eyebrow?: string | null,
    Title?: string | null,
    Subtitle?: string | null,
    pageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIntroductionSubscriptionVariables = {
  filter?: ModelSubscriptionIntroductionFilterInput | null,
};

export type OnUpdateIntroductionSubscription = {
  onUpdateIntroduction?:  {
    __typename: "Introduction",
    id: string,
    Eyebrow?: string | null,
    Title?: string | null,
    Subtitle?: string | null,
    pageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIntroductionSubscriptionVariables = {
  filter?: ModelSubscriptionIntroductionFilterInput | null,
};

export type OnDeleteIntroductionSubscription = {
  onDeleteIntroduction?:  {
    __typename: "Introduction",
    id: string,
    Eyebrow?: string | null,
    Title?: string | null,
    Subtitle?: string | null,
    pageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSectionsSubscriptionVariables = {
  filter?: ModelSubscriptionSectionsFilterInput | null,
};

export type OnCreateSectionsSubscription = {
  onCreateSections?:  {
    __typename: "Sections",
    id: string,
    HeroBanner?:  {
      __typename: "HeroBanner",
      id: string,
      Title?: string | null,
      SubTitle?: string | null,
      Background_Image?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Introductions?:  {
      __typename: "Introduction",
      id: string,
      Eyebrow?: string | null,
      Title?: string | null,
      Subtitle?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    sectionsHeroBannerId?: string | null,
    sectionsIntroductionsId?: string | null,
  } | null,
};

export type OnUpdateSectionsSubscriptionVariables = {
  filter?: ModelSubscriptionSectionsFilterInput | null,
};

export type OnUpdateSectionsSubscription = {
  onUpdateSections?:  {
    __typename: "Sections",
    id: string,
    HeroBanner?:  {
      __typename: "HeroBanner",
      id: string,
      Title?: string | null,
      SubTitle?: string | null,
      Background_Image?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Introductions?:  {
      __typename: "Introduction",
      id: string,
      Eyebrow?: string | null,
      Title?: string | null,
      Subtitle?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    sectionsHeroBannerId?: string | null,
    sectionsIntroductionsId?: string | null,
  } | null,
};

export type OnDeleteSectionsSubscriptionVariables = {
  filter?: ModelSubscriptionSectionsFilterInput | null,
};

export type OnDeleteSectionsSubscription = {
  onDeleteSections?:  {
    __typename: "Sections",
    id: string,
    HeroBanner?:  {
      __typename: "HeroBanner",
      id: string,
      Title?: string | null,
      SubTitle?: string | null,
      Background_Image?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Introductions?:  {
      __typename: "Introduction",
      id: string,
      Eyebrow?: string | null,
      Title?: string | null,
      Subtitle?: string | null,
      pageID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    sectionsHeroBannerId?: string | null,
    sectionsIntroductionsId?: string | null,
  } | null,
};

export type OnCreatePageSubscriptionVariables = {
  filter?: ModelSubscriptionPageFilterInput | null,
};

export type OnCreatePageSubscription = {
  onCreatePage?:  {
    __typename: "Page",
    id: string,
    Title?: string | null,
    slug?: string | null,
    HeroBanner?:  {
      __typename: "ModelHeroBannerConnection",
      nextToken?: string | null,
    } | null,
    Introductions?:  {
      __typename: "ModelIntroductionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePageSubscriptionVariables = {
  filter?: ModelSubscriptionPageFilterInput | null,
};

export type OnUpdatePageSubscription = {
  onUpdatePage?:  {
    __typename: "Page",
    id: string,
    Title?: string | null,
    slug?: string | null,
    HeroBanner?:  {
      __typename: "ModelHeroBannerConnection",
      nextToken?: string | null,
    } | null,
    Introductions?:  {
      __typename: "ModelIntroductionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePageSubscriptionVariables = {
  filter?: ModelSubscriptionPageFilterInput | null,
};

export type OnDeletePageSubscription = {
  onDeletePage?:  {
    __typename: "Page",
    id: string,
    Title?: string | null,
    slug?: string | null,
    HeroBanner?:  {
      __typename: "ModelHeroBannerConnection",
      nextToken?: string | null,
    } | null,
    Introductions?:  {
      __typename: "ModelIntroductionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHeroBannerSubscriptionVariables = {
  filter?: ModelSubscriptionHeroBannerFilterInput | null,
};

export type OnCreateHeroBannerSubscription = {
  onCreateHeroBanner?:  {
    __typename: "HeroBanner",
    id: string,
    Title?: string | null,
    SubTitle?: string | null,
    Background_Image?: string | null,
    pageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHeroBannerSubscriptionVariables = {
  filter?: ModelSubscriptionHeroBannerFilterInput | null,
};

export type OnUpdateHeroBannerSubscription = {
  onUpdateHeroBanner?:  {
    __typename: "HeroBanner",
    id: string,
    Title?: string | null,
    SubTitle?: string | null,
    Background_Image?: string | null,
    pageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHeroBannerSubscriptionVariables = {
  filter?: ModelSubscriptionHeroBannerFilterInput | null,
};

export type OnDeleteHeroBannerSubscription = {
  onDeleteHeroBanner?:  {
    __typename: "HeroBanner",
    id: string,
    Title?: string | null,
    SubTitle?: string | null,
    Background_Image?: string | null,
    pageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
