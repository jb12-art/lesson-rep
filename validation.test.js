import { expect, describe, it } from "vitest";
// import { validationUsername } from "/validation.js";

// test("check if username is at least 3 characters", () => {
//   //   // Arrange: set up test data
//   const username = "joe";

//   //   // Act: call function being tested
//   const result = validationUsername(username);

//   //   // Assert: check if result match the expected output
//   expect(result).toBe(true);
// });

//
// 2.
// import { expect, describe, it } from "vitest";
import { validateEmail } from "/validation.js";

describe("validateEmail", () => {
  //   // test 1. student email
  it("returns true for valid Noroff student email", () => {
    const email = "student@stud.noroff.no";
    const result = validateEmail(email);
    expect(result).toBe(true);
  });

  //   // test 2. staff email
  it("returns true for valid Noroff staff email", () => {
    const email = "teacher@noroff.no";
    const result = validateEmail(email);
    expect(result).toBe(true);
  });

  //   // Test 3. other email domains are rejected
  it("returns false for non-Noroff email", () => {
    const email = "student@gmail.com";
    const result = validateEmail(email);
    expect(result).toBe(false);
  });

  //   // test 4.
  it("returns false for invalid email format", () => {
    const email = "not-an-email";
    const result = validateEmail(email);
    expect(result).toBe(false);
  });
});

//
// 3.
// import { expect, describe, it } from "vitest";
import { validatePassword } from "./validation";

describe("validatePassword", () => {
  const testCases = [
    { password: "short", expected: false },
    { password: "exactly8", expected: true },
    { password: "longerpassword", expected: true },
  ];

  testCases.forEach(({ password, expected }) => {
    it(`returns ${expected} for password "${password}"`, () => {
      const result = validatePassword(password);
      expect(result).toBe(expected);
    });
  });
});

//
// 4.
// import { expect, describe, it } from "vitest";
import { validateForm } from "./validation";

describe("validateForm", () => {
  // testing 3 different situations
  const testCases = [
    {
      // 1. all is correct
      email: "valid@stud.noroff.no",
      password: "validpass",
      expected: { isValid: true, errors: {} },
    },
    {
      // 2. all is wrong
      email: "invalid@gmail.com",
      password: "short",
      expected: {
        isValid: false,
        errors: {
          email: "please enter a valid Noroff email address",
          password: "password must be at least 8 characters",
        },
      },
    },
    {
      // 3. email is good, but password is too short
      email: "valid@noroff.no",
      password: "short",
      expected: {
        isValid: false,
        errors: {
          password: "password must be at least 8 characters",
        },
      },
    },
  ];

  testCases.forEach(({ email, password, expected }) => {
    it(`validates correctly for email "${email}" and password "${password}"`, () => {
      const result = validateForm(email, password);
      expect(result).toEqual(expected);
    });
  });
});
