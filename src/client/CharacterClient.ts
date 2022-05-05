import { AxiosInstance } from 'axios';
import createNoAuthFetcher from 'services/noAuthFetcher';
import { Character } from 'types/models';
import AbstractClient from './AbstractClient';

export default class CharacterClient extends AbstractClient<Character> {
  protected fetcher: AxiosInstance = createNoAuthFetcher();
  public async getAll(): Promise<Character[]> {
    const response = await this.fetcher.get('/characters');
    return response.data;
  }
  public async getOne(id: string): Promise<Character> {
    const response = await this.fetcher.get(`/characters/${id}`);
    return response.data;
  }
  public async addOne(val: Character): Promise<Character> {
    return {} as Character;
  }
  public async deleteOne(id: string): Promise<Character> {
    return {} as Character;
  }
}
