import { Genre } from '@constants/index';

export default class Validator {
  private artistRequest = [
    { field: 'name' },
    { field: 'country' },
    { field: 'description' },
    { field: 'members' },
    { field: 'photos' },
    { field: 'foundation_date', validator: this.validateDate, errorMessage: 'date' },
    { field: 'genre', validator: this.validateGenre, errorMessage: 'genre' },
    { field: 'facebook_url', validator: this.validateURL, errorMessage: 'url' },
    { field: 'twitter_url', validator: this.validateURL, errorMessage: 'url' },
    { field: 'instagram_url', validator: this.validateURL, errorMessage: 'url' },
    { field: 'wikipedia_url', validator: this.validateURL, errorMessage: 'url' },
  ];

  private albumRequest = [
    { field: 'name' },
    { field: 'cover' },
    { field: 'studio' },
    { field: 'producers' },
    { field: 'artist_id' },
    { field: 'release_date', validator: this.validateDate, errorMessage: 'date' },
  ];

  // prettier-ignore
  private musicRequest = [
    { field: 'title' },
    { field: 'duration' },
    { field: 'file' },
    { field: 'composers' },
    { field: 'lyrics' },
    { field: 'album_id' }
  ];

  public validateCreateArtistRequest(request: any): Array<string> {
    let errors = [];

    for (const i of this.artistRequest) {
      const value = request[i.field];

      if (!this.required(value)) {
        errors.push(`Field ${i.field} is required.`);
        continue;
      }

      if (i.validator ? !i.validator(value) : false) {
        errors.push(`Field ${i.field} must be a valid ${i.errorMessage}.`);
      }
    }

    return errors;
  }

  public validateUpdateArtistRequest(request: any): Array<string> {
    let errors = [];

    for (const i of this.artistRequest) {
      const value = request[i.field];

      if (value && i.validator ? !i.validator(value) : false) {
        errors.push(`Field ${i.field} must be a valid ${i.errorMessage}.`);
      }
    }

    return errors;
  }

  public validateCreateAlbumRequest(request: any): Array<string> {
    let errors = [];

    for (const i of this.albumRequest) {
      const value = request[i.field];

      if (!this.required(value)) {
        errors.push(`Field ${i.field} is required.`);
        continue;
      }

      if (i.validator ? !i.validator(value) : false) {
        errors.push(`Field ${i.field} must be a valid ${i.errorMessage}.`);
      }
    }

    return errors;
  }

  public validateUpdateAlbumRequest(request: any): Array<string> {
    let errors = [];

    for (const i of this.albumRequest) {
      const value = request[i.field];

      if (value && i.validator ? !i.validator(value) : false) {
        errors.push(`Field ${i.field} must be a valid ${i.errorMessage}.`);
      }
    }

    return errors;
  }

  public validateCreateMusicRequest(request: any): Array<string> {
    let errors = [];

    for (const i of this.musicRequest) {
      const value = request[i.field];

      if (!this.required(value)) {
        errors.push(`Field ${i.field} is required.`);
        continue;
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
