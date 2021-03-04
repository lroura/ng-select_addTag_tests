import { Component, OnInit } from "@angular/core";

@Component({
  selector: "tags-default-example",
  templateUrl: "./tags-default-example.component.html",
  styleUrls: ["./tags-default-example.component.scss"]
})
export class TagsDefaultExampleComponent implements OnInit {
  selectedCompany;

  items: any[];

  ngOnInit() {
    this.items = ["Elemento 1", "Elemento 2"];
  }

  save($event: any) {
    return $event;
  }
}
