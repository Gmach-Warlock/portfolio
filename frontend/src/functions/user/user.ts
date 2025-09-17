import { rnG } from "../generate/generate";
import { timestampSecondFormat } from "../time/time";
import type { UserType } from "../../app/types";

/**
 * creates a new user object with the provided property values, and generates an ID and timestamp for it.
 * @param username 
 * @param email 
 * @returns an object of UserType and generates the required information
 */

export function createNewUser(username: string, email: string): UserType {
    return {
        username: username,
        email: email,
        id: rnG(10),
        timeCreated: timestampSecondFormat(),
    }
}