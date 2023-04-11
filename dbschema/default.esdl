module default {
  type Transaction {
    required property transaction_date -> datetime;
    required property amount -> decimal;
    required property name -> str;
    required property transaction_type -> str;
  }
}
