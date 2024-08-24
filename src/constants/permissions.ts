/**
 * @module permissions
 *
 * @description Module for user permission constants.
 */

/**
 * Enum representing various permissions for user management and application control.
 * These permissions can be assigned to roles to control user access to different functionalities.
 *
 * @enum {string}
 * @readonly
 * @property {string} CREATE_USER - Permission to create new users in the system.
 * @property {string} READ_USER - Permission to read or view user details.
 * @property {string} UPDATE_USER - Permission to update existing user information.
 * @property {string} DELETE_USER - Permission to delete users from the system.
 * @property {string} CREATE_ROLE - Permission to create new roles in the system.
 * @property {string} READ_ROLE - Permission to read or view role details.
 * @property {string} UPDATE_ROLE - Permission to update existing role information.
 * @property {string} DELETE_ROLE - Permission to delete roles from the system.
 * @property {string} ASSIGN_PERMISSION - Permission to assign permissions to roles.
 * @property {string} REMOVE_PERMISSION - Permission to remove permissions from roles.
 * @property {string} ACTIVATE_ACCOUNT - Permission to activate user accounts.
 * @property {string} RESET_PASSWORD - Permission to reset user passwords.
 * @property {string} VIEW_AUDIT_LOGS - Permission to view audit logs for tracking user activity and changes.
 * @property {string} GENERATE_REPORTS - Permission to generate various reports based on user and system data.
 */
export enum Permission {
  /**
   * Permission to create new users in the system.
   */
  CREATE_USER = "CREATE_USER",

  /**
   * Permission to read or view user details.
   */
  READ_USER = "READ_USER",

  /**
   * Permission to update existing user information.
   */
  UPDATE_USER = "UPDATE_USER",

  /**
   * Permission to delete users from the system.
   */
  DELETE_USER = "DELETE_USER",

  /**
   * Permission to create new roles in the system.
   */
  CREATE_ROLE = "CREATE_ROLE",

  /**
   * Permission to read or view role details.
   */
  READ_ROLE = "READ_ROLE",

  /**
   * Permission to update existing role information.
   */
  UPDATE_ROLE = "UPDATE_ROLE",

  /**
   * Permission to delete roles from the system.
   */
  DELETE_ROLE = "DELETE_ROLE",

  /**
   * Permission to assign permissions to roles.
   */
  ASSIGN_PERMISSION = "ASSIGN_PERMISSION",

  /**
   * Permission to remove permissions from roles.
   */
  REMOVE_PERMISSION = "REMOVE_PERMISSION",

  /**
   * Permission to activate user accounts.
   */
  ACTIVATE_ACCOUNT = "ACTIVATE_ACCOUNT",

  /**
   * Permission to reset user passwords.
   */
  RESET_PASSWORD = "RESET_PASSWORD",

  /**
   * Permission to view audit logs for tracking user activity and changes.
   */
  VIEW_AUDIT_LOGS = "VIEW_AUDIT_LOGS",

  /**
   * Permission to generate various reports based on user and system data.
   */
  GENERATE_REPORTS = "GENERATE_REPORTS",
}
