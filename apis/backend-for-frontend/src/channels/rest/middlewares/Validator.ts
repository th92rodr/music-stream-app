import { Genre } from '@constants/index';

interface request {
  field: string;
  validator?: ((str: string) => boolean) | undefined;
  dataType?: string | undefined;
}

export default class Validator {
  // prettier-ignore
  private userRequest = [
    { field: 'username' },
    { field: 'password' },
    { field: 'email', validator: this.validateEmail, dataType: 'email' },
  ];

  // prettier-ignore
  private tokenRequest = [
    { field: 'password' },
    { field: 'email', validator: this.validateEmail, dataType: 'email' },
  ];

  private artistRequest = [
    { field: 'name' },
    { field: 'country' },
    { field: 'description' },
    { field: 'members' },
    { field: 'photos' },
    { field: 'font' },
    { field: 'foundation_date', validator: this.validateDate, dataType: 'date' },
    { field: 'genre', validator: this.validateGenre, dataType: 'genre' },
    { field: 'facebook_url', validator: this.validateURL, dataType: 'url' },
    { field: 'twitter_url', validator: this.validateURL, dataType: 'url' },
    { field: 'instagram_url', validator: this.validateURL, dataType: 'url' },
    { field: 'wikipedia_url', validator: this.validateURL, dataType: 'url' },
  ];

  private albumRequest = [
    { field: 'name' },
    { field: 'cover' },
    { field: 'studio' },
    { field: 'producers' },
    { field: 'artist_id' },
    { field: 'release_date', validator: this.validateDate, dataType: 'date' },
  ];

  // prettier-ignore
  private musicRequest = [
    { field: 'title' },
    { field: 'duration' },
    { field: 'file' },
    { field: 'composers' },
    { field: 'lyrics' },
    { field: 'album_id' },
    { field: 'artist_id' },
  ];

  // prettier-ignore
  private playlistRequest = [
    { field: 'name' },
  ];

  // prettier-ignore
  private createPlaylistTrackRequest = [
    { field: 'music_id' },
  ];

  // prettier-ignore
  private updatePlaylistTrackRequest = [
    { field: 'index' },
  ];

  public validateCreateUserRequest(request: any): Array<string> {
    return this.validate(request, this.userRequest);
  }

  public validateUpdateUserRequest(request: any): Array<string> {
    return this.validateConditional(request, this.userRequest);
  }

  public validateCreateTokenRequest(request: any): Array<string> {
    return this.validate(request, this.tokenRequest);
  }

  public validateCreateArtistRequest(request: any): Array<string> {
    return this.validate(request, this.artistRequest);
  }

  public validateUpdateArtistRequest(request: any): Array<string> {
    return this.validateConditional(request, this.artistRequest);
  }

  public validateCreateAlbumRequest(request: any): Array<string> {
    return this.validate(request, this.albumRequest);
  }

  public validateUpdateAlbumRequest(request: any): Array<string> {
    return this.validateConditional(request, this.albumRequest);
  }

  public validateCreateMusicRequest(request: any): Array<string> {
    return this.validate(request, this.musicRequest);
  }

  public validatePlaylistRequest(request: any): Array<string> {
    return this.validate(request, this.playlistRequest);
  }

  public validateCreatePlaylistTrackRequest(request: any): Array<string> {
    return this.validate(request, this.createPlaylistTrackRequest);
  }

  public validateUpdatePlaylistTrackRequest(request: any): Array<string> {
    return this.validate(request, this.updatePlaylistTrackRequest);
  }

  private validate(request: any, requestType: Array<request>): Array<string> {
    let errors = [];

    for (const i of requestType) {
      const value = request[i.field];

      if (!this.required(value)) {
        errors.push(`Field ${i.field} is required.`);
        continue;
      }

      if (i.validator ? !i.validator(value) : false) {
        errors.push(`Field ${i.field} must be a valid ${i.dataType}.`);
      }
    }

    return errors;
  }

  private validateConditional(request: any, requestType: Array<request>): Array<string> {
    let errors = [];

    for (const i of requestType) {
      const value = request[i.field];

      if (value && i.validator ? !i.validator(value) : false) {
        errors.push(`Field ${i.field} must be a valid ${i.dataType}.`);
      }
    }

    return errors;
  }

  private required(field: string): boolean {
    if (field && field != '') {
      return true;
    }
    return false;
  }

  private validateEmail(str: string): boolean {
    const pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    return !!pattern.test(str);
  }

  private validateGenre(str: string): boolean {
    return Object.values(Genre).includes(str);
  }

  private validateURL(str: string): boolean {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
      'i',
    );

    return !!pattern.test(str);
  }

  private validateDate(str: string): boolean {
    const date = new Date(str);

    // An invalid date object returns NaN for getTime()
    return !isNaN(date.getTime());
  }
}
