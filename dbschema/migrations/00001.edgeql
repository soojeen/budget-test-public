CREATE MIGRATION m1zo47pio2nuu2fbff6lndykinjiiilgqccldqk2pljwzjvwu4pp6a
    ONTO initial
{
  CREATE FUTURE nonrecursive_access_policies;
  CREATE TYPE default::Transaction {
      CREATE REQUIRED PROPERTY amount -> std::decimal;
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE REQUIRED PROPERTY transaction_date -> std::datetime;
      CREATE REQUIRED PROPERTY transaction_type -> std::str;
  };
};
