import { ReactNode } from "react";

export interface IResortParams {
	banner: IBanner;
	descriptionHotel: string | ReactNode;
	paragraph: IParagraph;
	list: IList[];
	gallery: IGallery[];
}

export interface IParagraph {
	title?: string;
	text: string | ReactNode;
}

export interface IBanner extends IScreenProperty<IImageProperty> {
	title: string;
	subtitle: string;
}

export interface IGallery extends IScreenProperty<IImageProperty> {}

export interface IImageProperty {
	src: string;
	alt: string;
	className?: string;
}

export interface IScreenProperty<T> {
	default: T;
	mobile?: T;
	desktop?: T;
}

export interface IList {
	title: string;
	description: string[];
}
