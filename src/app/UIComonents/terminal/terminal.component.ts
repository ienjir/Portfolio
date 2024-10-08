import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgForOf} from '@angular/common';
import {PaginatorModule} from 'primeng/paginator';

@Component({
  selector: 'Terminal',
  templateUrl: './terminal.component.html',
  standalone: true,
  imports: [
    NgForOf,
    PaginatorModule
  ],
  styleUrl: './terminal.component.scss'
})
export class Terminal implements AfterViewInit {
  constructor(private router: Router) {
  }

  output: string[] = [];
  inputHistory: string[] = [];
  inputHistoryIndex: number = -1;
  input: string = '';
  defaultText = "Portfolio@ienjir";

  @ViewChild('TerminalInput') TerminalInput: ElementRef | undefined;
  @ViewChild('Terminal') Terminal: ElementRef | undefined;

  ngAfterViewInit() {
    this.terminalFocus()
  }

  terminalFocus() {
    this.TerminalInput?.nativeElement.focus();
  }

  setCursorToEnd() {
    setTimeout(() => {
      const length = this.TerminalInput?.nativeElement.value.length;
      this.TerminalInput?.nativeElement.focus();
      this.TerminalInput?.nativeElement.setSelectionRange(length, length);
    }, 0);
  }

  inputHistoryUp() {
    if (this.inputHistoryIndex + 1 < this.inputHistory.length) {
      this.inputHistoryIndex++
      this.input = this.inputHistory[this.inputHistoryIndex]
    }
    this.setCursorToEnd()
  }

  inputHistoryDown() {
    if (this.inputHistoryIndex - 1 > -1) {
      this.inputHistoryIndex--
      this.input = this.inputHistory[this.inputHistoryIndex]
    }
    this.setCursorToEnd()
  }

  handleCommand() {
    const input = this.input.trim();
    this.inputHistory.unshift(`${input}`)

    switch (input) {
      case 'help':
        this.output.push(`<div><p>help</p></div>`);
        break;
      case 'clear':
        this.output = [];
        break;

      case 'exit':
        console.log(this.router.url)
        break;

      case 'lorem':
        this.output.push('<p>Lorem ipsum odor amet, consectetuer adipiscing elit. Leo ipsum enim ex euismod fusce malesuada; quisque a? Dui potenti est malesuada facilisis nunc taciti malesuada maecenas. Nostra in nascetur est sollicitudin vestibulum rutrum tempor. Congue purus senectus tristique facilisis, fames netus non? Sagittis morbi nullam integer, vel ipsum tempus aliquet. Lobortis placerat vel fusce proin dignissim ligula. <br/> Varius proin semper cubilia, id sociosqu nunc. Blandit fringilla inceptos lectus integer tempor ornare facilisis efficitur metus. Faucibus conubia morbi lobortis enim dictumst convallis placerat. Curabitur duis elementum dapibus convallis eu diam dignissim. Sagittis felis molestie vestibulum lacinia bibendum, purus aptent. Aliquet turpis purus fames pretium eget at sociosqu. Potenti ut sit mauris at quam dolor aptent. Fringilla facilisi vestibulum ultricies magnis ipsum laoreet. Montes taciti commodo nisi phasellus enim ipsum praesent. Torquent pretium vulputate posuere porttitor vel placerat laoreet quisque. <br/>Viverra natoque iaculis, vestibulum condimentum convallis interdum montes. Tristique lacus venenatis tincidunt; lacus euismod magna aptent egestas. Finibus dui in tincidunt rutrum tellus eleifend. Vivamus id nec arcu hendrerit lorem. Rhoncus torquent dapibus ridiculus, ullamcorper purus maecenas? Auctor eu nunc mi cursus sed est netus nisl lobortis.<br/>Est hac semper felis ultrices varius blandit dignissim dui. Laoreet aptent eu semper viverra rhoncus in sociosqu. Auctor tristique rutrum odio suscipit hac est. Ipsum dapibus ante hac rutrum hendrerit felis eu fringilla cubilia. Eget eleifend iaculis vivamus massa venenatis non. Fames eleifend mauris semper maximus; nostra vehicula justo. Sociosqu senectus dui sit imperdiet massa diam lobortis sagittis. Libero eget quis eros pharetra sed tortor. Natoque orci euismod fringilla at tortor praesent id mi. Ad mus vitae gravida odio mi.<br/>Orci tortor eget primis eget montes imperdiet. Quis eget vestibulum sit euismod a ac. Quis lacus elit risus nam class fames lectus. Torquent lacus libero integer egestas quisque dis. Enim id habitant dictum rutrum aliquet mauris. Aenean malesuada vulputate purus tortor rhoncus, sed libero et. Lobortis pretium magna proin tempus porta interdum magna.</p>')
        break;

      default:
        this.output.push(`<p>Unknown command: ${this.input}<br>If you need a list of all commands type 'help'</p>`);
        break;
    }
    this.input = '';
  }
}
