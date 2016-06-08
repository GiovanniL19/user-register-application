import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  profilePicture: DS.attr('string'),
  contact: DS.attr('string'),
  checkedIn: DS.attr('boolean', {defaultValue: false})
});