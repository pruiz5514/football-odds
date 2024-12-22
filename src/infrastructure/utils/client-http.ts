
const defaultBaseUrl = 'https://today-football-prediction.p.rapidapi.com/predictions'

export class HttpClient {
    private baseUrl: string;

    constructor(baseUrl?:string){
        this.baseUrl = baseUrl || defaultBaseUrl
    }

    async get<T>(url:string):Promise<T>{
        const headers = this.getHeader();
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: 'GET'
        });

        return this.handleResponse(response)
    }

    getHeader (){
        const headers: HeadersInit = {
            'Content-Type' : 'Aplication/json',
            'x-rapidapi-key': '08dcbb7b0emshda08499dfca00b9p12ae9djsn748ef7da98b5',
		    'x-rapidapi-host': 'today-football-prediction.p.rapidapi.com'
        }

        return headers
    }

    private async handleResponse (response:Response){
        if (!response.ok) {
            const errorData = await response.json();
            throw errorData;
          }
      
        return await response.json();
    }
}