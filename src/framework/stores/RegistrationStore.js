import {action, observable, computed} from 'mobx';
class RegistrationStore {
  @observable name = '';
  @observable surname = '';
  @observable phone = '';
  photo = '';
  @observable bio = '';

  @action addMainInfo(payload) {
    this.name = payload.name;
    this.surname = payload.surname;
    this.phone = payload.phone;
  }

  @action addPhoto(payload) {
    this.photo = payload;
  }

  @action addBio(payload) {
    this.bio = payload;
  }
}

export const registrationStore = new RegistrationStore();
