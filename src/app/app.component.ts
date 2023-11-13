import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise-2';
  items = [

    { "name": 'sachin Tendulkar', "run": 10000, "matches": 500 },
    { "name": 'virat kohli', "run": 3456, "matches": 230 },
    { "name": 'bumrah', "run": 643, "matches": 50 },
    { "name": 'ravindra jadeja', "run": 1456, "matches": 300 },
    { "name": 'shubman gill', "run": 1000, "matches": 540 },
    { "name": 'shreyas iyer', "run": 3400, "matches": 400 },
    { "name": 'ravinchandra ashvin', "run": 865, "matches": 203 },
    { "name": 'mohmmad shammi', "run": 456, "matches": 104 },
    { "name": 'virendra sehwag', "run": 8277, "matches": 178 },
    { "name": 'glenn maxwell', "run": 4352, "matches": 87 },
    { "name": 'mitchel marsh', "run": 765, "matches": 65 },
    { "name": 'fakhar zaman', "run": 961, "matches": 74 },
    { "name": 'ken willliansen', "run": 542, "matches": 321 },
    { "name": 'rachindra jadeja', "run": 987, "matches": 123 },
    { "name": 'sourav ganguli', "run": 2345, "matches": 213 },
    { "name": 'babar azam', "run": 1223, "matches": 421 },
    { "name": 'ishan kissan', "run": 1003, "matches": 432 },
    { "name": 'martin guptil', "run": 2341, "matches": 314 },
    { "name": 'rohit sharma', "run": 5983, "matches": 90 },
    { "name": 'jos butler', "run": 3400, "matches": 100 },

  ];
  names: any = []
  show(name: string) {
    this.names = this.items.filter(filter =>
      filter.name.includes(name)
    )
  }

  deleteRow(index: any) {
    let data = this.items.indexOf(index)
    const confirmation = confirm(`are you sure to delete cricketer ${index.name}`)
    if (confirmation)
      this.items.splice(data, 1); // Removes 1 item at the specified index
  }

}
