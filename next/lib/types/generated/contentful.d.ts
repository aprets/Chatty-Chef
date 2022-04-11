// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IExampleCowPageTypeFields {
  /** Content Item Title */
  contentItemTitle: string;

  /** Main Title */
  mainTitle: string;

  /** Main Top Text */
  mainTopText: Document;

  /** Picture */
  picture: Asset;
}

export interface IExampleCowPageType extends Entry<IExampleCowPageTypeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "exampleCowPageType";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IMenuItemTypeFields {
  /** Name */
  name: string;

  /** Description */
  description?: string | undefined;

  /** Price */
  price: number;

  /** Picture */
  picture?: Asset | undefined;
}

/** Content-type for menu item */

export interface IMenuItemType extends Entry<IMenuItemTypeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "menuItemType";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IMenuPageTypeFields {
  /** Content Item Title */
  contentItemTitle: string;

  /** Main Title */
  mainTitle: string;

  /** Subtitle */
  subtitle?: string | undefined;

  /** Header Picture */
  headerPicture: Asset;

  /** Menu Sections */
  menuSections: IMenuSectionType[];
}

/** Content-type for the menu page */

export interface IMenuPageType extends Entry<IMenuPageTypeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "menuPageType";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IMenuSectionTypeFields {
  /** Title */
  title: string;

  /** Description */
  description?: string | undefined;

  /** Items */
  items: IMenuItemType[];
}

/** Content-type for a section on menu, must have a title and list of food */

export interface IMenuSectionType extends Entry<IMenuSectionTypeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "menuSectionType";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "exampleCowPageType"
  | "menuItemType"
  | "menuPageType"
  | "menuSectionType";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
