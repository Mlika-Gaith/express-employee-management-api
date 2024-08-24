/**
 * @module Accounts
 *
 * @description Module for user account status constants.
 */

/**
 * Enum representing various user account statuses in the system.
 * These statuses are used to control user access and functionality based on their account status.
 *
 * @enum {string}
 * @readonly
 * @property {string} ACTIVE - Active account status.
 * @property {string} INACTIVE - Inactive account status.
 * @property {string} PENDING - Pending account status.
 * @property {string} BLOCKED - Blocked account status.
 */
export enum AccountStatus {
  /**
   * Active account status.
   */
  ACTIVE = "ACTIVE",
  /**
   * Inactive account status.
   */
  INACTIVE = "INACTIVE",
  /**
   * Pending account status.
   */
  PENDING = "PENDING",
  /**
   * Blocked account status.
   */
  BLOCKED = "BLOCKED",
  /**
   * Suspended account status.
   */
  SUSPENDED = "SUSPENDED",
}
