import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class RequestService {
  private readonly idsToProcess: number[] = [];

  async process(): Promise<number> {
    await this.fetchIds();
    return this.processIds();
  }

  private async fetchIds(): Promise<void> {
    this.idsToProcess.push(1, 2, 3, 4, 5);
    await new Promise((resolve) => setTimeout(resolve, 10));
  }

  private async processIds(): Promise<number> {
    let sum = 0;
    for (const id of this.idsToProcess) {
      sum += id;
      await new Promise((resolve) => setTimeout(resolve, 10));
    }
    this.idsToProcess.length = 0;
    return sum;
  }
}
