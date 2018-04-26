import { Component } from '@angular/core';
import { AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit{
  title = 'app';


  constructor(){

    // Element.prototype.remove = function() {
    //   this.parentElement.removeChild(this);
    // }
    // NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    //   for(var i = this.length - 1; i >= 0; i--) {
    //     if(this[i] && this[i].parentElement) {
    //       this[i].parentElement.removeChild(this[i]);
    //     }
    //   }
    // }


  }

  clean(node) {
    for(var n = 0; n < node.childNodes.length; n ++)
    {
      var child = node.childNodes[n];
      if
      (
        child.nodeType === 8
        ||
        (child.nodeType === 3 && !/\S/.test(child.nodeValue))
      )
      {
        node.removeChild(child);
        n --;
      }
      else if(child.nodeType === 1)
      {
        this.clean(child);
      }
    }
  }


  ngAfterContentInit(): void{
    // var ele = document.getElementById("em");
    // console.log('KKKKKKKK',ele.childNodes);
    // while (ele.hasChildNodes()) {
    //   ele.removeChild(ele.lastChild);
    // }

  }

}
