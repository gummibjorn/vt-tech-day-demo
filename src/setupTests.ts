// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import matchers from  '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'
import {cleanup} from "@testing-library/react";

expect.extend(matchers)

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
	cleanup();
});
