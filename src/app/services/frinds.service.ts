import {Injectable} from '@angular/core';
@Injectable()
export class FriendService {

    getFriends() {
        return FRIENDS;
    }
}

let FRIENDS = [
    {name: 'Wiktor'},
    {name: 'Łukasz'},
    {name: 'Wiktor'},
    {name: 'Adam'},
    {name: 'Wiktor'},
    {name: 'Michał'},
    {name: 'Tomek'},
    {name: 'Piotr'},
    {name: 'Maciej'},
    {name: 'Krzysztof'},
    {name: 'Bartek'},
    {name: 'Paweł'},
    {name: 'Sławek'},
    {name: 'Ala'},
    {name: 'Karolina'},
    {name: 'Barbara'},
    {name: 'Wiktor'},
]
