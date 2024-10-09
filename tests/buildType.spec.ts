/* eslint-disable */
//This test is not implemented, I have just created the carcase for future implementation
import { test, Page } from '@playwright/test';

test.describe.skip('test', { tag: '@regression' }, () => {
  test(
    'User should be able to create build type',
    { tag: ['@positile', '@crud'] },
    async () => {
      //userCreatesBuildTypeTest()
      //step("Create user");
      //step("Create project by user");
      //step("Create buildType for project by user");
      //step("Check buildType was created successfully with correct data");
    }
  );
  test(
    'User should not be able to create two build types with the same id',
    { tag: ['@negative', '@crud'] },
    async () => {
      //userCreatesTwoBuildTypesWithTheSameIdTest()
      // step("Create user");
      // step("Create project by user");
      // step("Create buildType1 for project by user");
      // step("Create buildType2 with same id as buildType1 for project by user");
      // step("Check buildType2 was not created with bad request code");
    }
  );
  test(
    'Project admin should be able to create build type for their project',
    { tag: ['@positive', '@roles'] },
    async () => {
      //projectAdminCreatesBuildTypeTest()
      //step("Create user");
      //step("Create project");
      //step("Grant user PROJECT_ADMIN role in project");
      //step("Create buildType for project by user (PROJECT_ADMIN)");
      //step("Check buildType was created successfully");
    }
  );
  test(
    'Project admin should not be able to create build type for not their project',
    { tag: ['@negative', '@roles'] },
    async () => {
      //projectAdminCreatesBuildTypeForAnotherUserProjectTest()
      //step("Create user1");
      //step("Create project1");
      //step("Grant user1 PROJECT_ADMIN role in project1");
      //step("Create user2");
      //step("Create project2");
      //step("Grant user2 PROJECT_ADMIN role in project2");
      //step("Create buildType for project1 by user2");
      //step("Check buildType was not created with forbidden code");
    }
  );
});
