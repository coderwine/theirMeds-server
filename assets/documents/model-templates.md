# Model Templates
This document is meant to show each model build and the relationship between one another.

## Items of Interest
- Name , Description, Amount, Time (am/pm/both), Special Requirements (w/food, etc), Side Effects, Pharmacist List, Alt Recommendations (for shortages).

(Consider a dosette from Pharmacist, may be a minimal fee)

- **Really need to consider the user roles (who is in charge?)**.  Should users be the patient or the person who is helping the patient?

## Models

**Admin**
May merge with User Table.

**User**
---

Title           | DataType  | Unique    | Allow Null    | Purpose   | 
---             | ---       | ---       | ---           | ---       | 
ID              | UUID      | TRUE      | FALSE         | Auth.     |
firstName       | STRING    | FALSE     | TRUE          | Desc.     |
lastName        | STRING    | FALSE     | TRUE          | Desc.     |
email           | STRING    | TRUE      | FALSE         | Desc.     |
password        | STRING    | FALSE     | FALSE         | Auth.     |
phone           | INTEGER   | FALSE     | TRUE          | Desc.     |
role            | ENUM      | FALSE     | FALSE         | Auth.     |

---

**Medications**
---
This is meant to detail the various sets of medication

Title           | DataType  | Unique    | Allow Null    | Purpose   | 
---             | ---       | ---       | ---           | ---       | 
ID              | UUID      | TRUE      | FALSE         | Auth.     |
Name            | STRING    | FALSE     | FALSE         | Desc.     |
Description     | TEXT      | FALSE     | FALSE         | Desc.     |
Amount          | *         | FALSE     | FALSE         | Desc.     |
Time            | ENUM*     | FALSE     | FALSE         | Desc.     |
Requirements    | TEXT      | FALSE     | FALSE         | Desc.     |
Side Effects    | TEXT      | FALSE     | FALSE         | Desc.     |
Alt.Recommends  | ARRAY*    | FALSE     | FALSE         | Desc.     |

---

**Assistants**
---
This is meant to allow users the ability to designate other individuals the ability to view their lists.  

Title           | DataType  | Unique    | Allow Null    | Purpose   | 
---             | ---       | ---       | ---           | ---       | 
ID              | UUID      | TRUE      | FALSE         | Auth.     |

---

**Pharmacy**
---
This will be used to link the users primary pharmacy information

Title           | DataType  | Unique    | Allow Null    | Purpose   | 
---             | ---       | ---       | ---           | ---       | 
ID              | UUID      | TRUE      | FALSE         | Auth.     |
Name            |           | FALSE     | FALSE         | Desc.     |
Phone           |           | FALSE     | FALSE         | Desc.     |
Street          |           | FALSE     | FALSE         | Desc.     |
City            |           | FALSE     | FALSE         | Desc.     |
State           |           | FALSE     | FALSE         | Desc.     |
Zip             |           | FALSE     | FALSE         | Desc.     |
URL             |           | FALSE     | FALSE         | Desc.     |
email           |           | FALSE     | FALSE         | Desc.     |
Lead Pharmacist |           | FALSE     | FALSE         | Desc.     |

---

**Doctors**
---
THis will be used to note the contact information for all the doctors for the user.

Title           | DataType  | Unique    | Allow Null    | Purpose   | 
---             | ---       | ---       | ---           | ---       | 
ID              | UUID      | TRUE      | FALSE         | Auth.     |

---