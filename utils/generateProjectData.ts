import { faker } from '@faker-js/faker';

const getCurrentDateTime = (): string => {
  return faker.date.recent().toISOString().replace(/[-:.]/g, '');
};

export const generateProjectData = {
  projectParentDefault: '_Root',
  invalidProjectParentDefault: () => `${faker.word.adjective()}`,
  projectName: () => `${getCurrentDateTime()}_${faker.word.adjective()}`,
  projectKey: () => `${faker.word.adjective()}_${getCurrentDateTime()}`,
  isActiveTrue: true,
  isActiveFalse: false,
};
