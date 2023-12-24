import { Asset } from "./asset.types"
import { IUser } from "./user.types"

export type IVisitReport = {
    _id: string,
    visit_in_credientials: {
        latitude: string,
        longitude: string,
        timestamp: Date,
        address: string
    },
    visit_out_credentials: {
        latitude: string,
        longitude: string,
        timestamp: Date,
        address: string
    },
    person: IUser,
    party_name: string,
    city: string,
    summary: string,
    is_old_party: boolean,
    dealer_of: string,
    refs_given: string,
    turnover: string,
    reviews_taken: number,
    visit_in_photo: Asset,
    ankit_input: { input: string, created_by: IUser, timestamp: Date },
    brijesh_input: { input: string, created_by: IUser, timestamp: Date },
    visit_validated: boolean,
    visit: IVisit,
    created_at: Date,
    updated_at: Date,
    created_by: IUser,
    updated_by: IUser
}
export type IVisit = {
    _id: string,
    start_day_photo: Asset,
    end_day_photo: Asset,
    start_day_credientials: {
        latitude: string,
        longitude: string,
        timestamp: Date,
        address: string
    },
    end_day_credentials: {
        latitude: string,
        longitude: string,
        timestamp: Date,
        address: string
    },
    visit_reports: IVisitReport[]
    created_at: Date,
    updated_at: Date,
    created_by: IUser,
    updated_by: IUser
}
