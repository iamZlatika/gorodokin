export const TOGGLE_LANGUAGE: "TOGGLE_LANGUAGE" = "TOGGLE_LANGUAGE";
export const OPEN_REVIEW_MODAL: "OPEN_REVIEW_MODAL" = "OPEN_REVIEW_MODAL";
export const CLOSE_REVIEW_MODAL: "CLOSE_REVIEW_MODAL" = "CLOSE_REVIEW_MODAL";



export interface IToggleLanguage {
    readonly type: typeof TOGGLE_LANGUAGE
    language: {type: string}
}

export interface IOpenReviewModal{
    readonly type: typeof OPEN_REVIEW_MODAL
}
export interface ICloseReviewModal{
    readonly type: typeof CLOSE_REVIEW_MODAL
}

export type ActionsTypes =
    | IToggleLanguage
    | IOpenReviewModal
    | ICloseReviewModal