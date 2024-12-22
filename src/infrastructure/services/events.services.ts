import { IEventDayResponse } from "../../core/get-eventDay-response.dto";
import { HttpClient } from "../utils/client-http";

export class EventsService {
    private httpClient : HttpClient;

    constructor (){
        this.httpClient = new HttpClient()
    };

    async findAllProjects (url:string){
        try{
            const response = this.httpClient.get<IEventDayResponse>(url);
            return response
        } catch (error){
            console.log(error);
            throw error;
        }
    }
}