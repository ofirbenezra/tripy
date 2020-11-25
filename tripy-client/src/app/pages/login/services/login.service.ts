import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) {
  }

  signup(user: User) {
    this.httpClient.post(`/auth/login`, {});
  }
}
