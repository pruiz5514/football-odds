export interface IEventDayResponse {
    pagination: IPagination;
    matches:    Match[];
}

export interface Match {
    id:                     string;
    home_team:              string;
    away_team:              string;
    date:                   Date;
    date_time:              Date;
    league:                 string;
    prediction:             string;
    prediction_odd:         number | null;
    prediction_probability: number;
    is_finished:            boolean;
    result_score:           null;
}

export interface IPagination {
    no_of_docs_total:   number;
    no_of_docs_in_page: number;
    page:               number;
}
