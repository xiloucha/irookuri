import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  maxColors = 4;

  colors: string[] = [];

  started = false;

  selectedColor = '#ffffff';

  colorSelected = false;

  // HEXコードを表示している色
  showCodeIndex: number | null = null;


  setMaxColors(count: number): void {
    this.maxColors = count;
    this.started = true;
  }


  selectColor(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.selectedColor = input.value;
    this.colorSelected = true;
  }


  sendColor(): void {

    this.colors.push(this.selectedColor);

    if (this.colors.length > this.maxColors) {
      this.colors.shift();
    }

    this.colorSelected = false;
    this.showCodeIndex = null;
  }


  openOrSendColor(colorInput: HTMLInputElement): void {

    if (this.colorSelected) {
      this.sendColor();
      return;
    }

    colorInput.click();
  }


  toggleCode(index: number): void {

    if (this.showCodeIndex === index) {
      this.showCodeIndex = null;
    } else {
      this.showCodeIndex = index;
    }

  }


  async copyColorCode(color: string): Promise<void> {

    await navigator.clipboard.writeText(color);

  }


  backToTitle(): void {

    this.started = false;

    this.colors = [];

    this.colorSelected = false;

    this.showCodeIndex = null;

  }

}