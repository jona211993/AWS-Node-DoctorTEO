import Role from "../models/m_role.js";
export const createRoles = async (req, res) => {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count > 0) return;

    await Promise.all([
      new Role({ name: "admin" }).save(),
      new Role({ name: "paciente" }).save(),
      new Role({ name: "medico" }).save(),      
    ]);
  } catch (error) {
    console.log(error);
  }
};