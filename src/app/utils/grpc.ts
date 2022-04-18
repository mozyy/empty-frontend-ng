import { Message } from 'google-protobuf';
import { capitalizeFirstLetter } from './utils';

export const protobufAssign = (obj: Object, msg:Message) => {
  const message = msg as any;
  Object.entries(obj).forEach(([key, value]) => {
    if (message[`set${capitalizeFirstLetter(key)}`]) {
      if (typeof value === 'object') {
        protobufAssign(value, message[`get${capitalizeFirstLetter(key)}`]());
      } else {
        message[`set${capitalizeFirstLetter(key)}`](value);
      }
    }
  });
};
