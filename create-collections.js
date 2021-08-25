use northwinds;

db.createCollection("clinic", {
    validator: {
        "$jsonSchema": { 
            "title": "Clinic",
            "description": "This document records the details of an clinic",
            "bsonType": "object",
            "properties": {
                "_id": {
                    "description": "A unique identifier for an clinic",
                    "bsonType": "objectId"
                },
                "clinic_name": {
                    "description": "name of the clinic",
                    "bsonType": "string",
                    "minLength": 2
                },
                "clinic_number": {
                    "description": "number of the clinic",
                    "bsonType": "number"
                },
                "addresses": {
                    "description": "addresses of the clinic",
                    "bsonType": "array",
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "use": {
                                "description": "address use",
                                "bsonType": "string"
                            },
                            "type": {
                                "description": "address type",
                                "bsonType": "string"
                            },
                            "line": {
                                "description": "address line",
                                "bsonType": "string"
                            },
                            "city": {
                                "description": "address city",
                                "bsonType": "string"
                            },
                            "district": {
                                "description": "address district",
                                "bsonType": "string"
                            },
                            "postal_code": {
                                "description": "address postal code",
                                "bsonType": "string"
                            },
                            "country": {
                                "description": "address country",
                                "bsonType": "string"
                            },
                            "period": {
                                "bsonType": "object",
                                "properties": {
                                    "start": {
                                        "description": "Start Date Time for Address",
                                        "bsonType": "date"
                                    },
                                    "end": {
                                        "description": "End Date Time for Address",
                                        "bsonType": "date"
                                    }
                                }
                            }
                        },
                        "required": [
                            "use"
                        ]
                    }
                },
                "position": {
                    "description": "The geo position of the clinic",
                    "bsonType": "object",
                    "properties": {
                        "latitude": {
                            "bsonType": "number",
                            "minimum": -90,
                            "maximum": 90
                        },
                        "longitude": {
                            "bsonType": "number",
                            "minimum": -180,
                            "maximum": 180
                        },
                        "altitude": {
                            "bsonType": "number"
                        }
                    }
                },
                "tax_id_number": {
                    "description": "The Tax Identification Number of the Organizatoion",
                    "bsonType": "string"
                },
                "parent_organization": {
                    "bsonType": "object",
                    "properties": {
                        "organization_id": {
                            "description": "The id of the parent organization",
                            "bsonType": "objectId"
                        },
                        "status": {
                            "description": "The status of the parent organization relationship",
                            "bsonType": "string"
                        },
                        "relationship": {
                            "description": "The relationship type",
                            "bsonType": "string"
                        },
                        "period": {
                            "bsonType": "object",
                            "properties": {
                                "start": {
                                    "description": "Start Date Time for the relationship",
                                    "bsonType": "date"
                                },
                                "end": {
                                    "description": "End Date Time for the relationship",
                                    "bsonType": "date"
                                }
                            }
                        }                  
                    }
                },
                "clinic_agreements": {
                    "description": "Array of clinic aggrements",
                    "bsonType": "array",
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "agreement_number": {
                                "description": "The aggreement number",
                                "bsonType": "number"
                            },
                            "type": {
                                "description": "The agreement type",
                                "bsonType": "string"
                            },
                            "description": {
                                "description": "A description for the agreement",
                                "bsonType": "string"
                            },
                            "period": {
                                "bsonType": "object",
                                "properties": {
                                    "start": {
                                        "description": "Start Date Time for Clinic",
                                        "bsonType": "date"
                                    },
                                    "end": {
                                        "description": "End Date Time for Clinic",
                                        "bsonType": "date"
                                    }
                                }
                            }               
                        }
                    }
                },
                "contacts": {
                    "bsonType": "array",
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "contact_id": {
                                "description": "The contact id",
                                "bsonType": "objectId"
                            },
                            "period": {
                                "bsonType": "object",
                                "properties": {
                                    "start": {
                                        "description": "Start Date Time for the contact",
                                        "bsonType": "date"
                                    },
                                    "end": {
                                        "description": "End Date Time for the contact",
                                        "bsonType": "date"
                                    }
                                }
                            }
                        }
                    }
                },
                "contact_points": {
                    "description": "contacts of the orginazation",
                    "bsonType": "array",
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "type": {
                                "description": "type of contact",
                                "bsonType": "string"
                            },
                            "system": {
                                "description": "contact system",
                                "bsonType": "string"
                            },
                            "value": {
                                "description": "contact value",
                                "bsonType": "string"
                            },
                            "rank": {
                                "description": "contact rank",
                                "bsonType": "number"
                            },
                            "status": {
                                "description": "contact status",
                                "bsonType": "string"
                            }
                        },
                        "required": [
                            "type"
                        ]
                    }
                },
                "status": {
                    "description": "The status of the Clinic",
                    "bsonType": "string"
                },
                "period": {
                    "bsonType": "object",
                    "properties": {
                        "start": {
                            "description": "Start Date Time for Clinic",
                            "bsonType": "date"
                        },
                        "end": {
                            "description": "End Date Time for Clinic",
                            "bsonType": "date"
                        }
                    }
                },
                "public_credentials": {
                    "bsonType": "object",
                    "properties": {
                        "credentials_id": {
                            "description": "Id of a public credential?? what is this a reference to?",
                            "bsonType": "objectId"
                        },
                        "credential_name": {
                            "description": "Description of the credential",
                            "bsonType": "string"
                        },
                        "credential_value": {
                            "description": "The value of the credential",
                            "bsonType": "string"
                        },
                        "credential_description": {
                            "description": "A description for the credential",
                            "bsonType": "string"
                        },
                        "status": {
                            "description": "The status of the credential",
                            "bsonType": "string"
                        }
                    }
                },
                "networks": {
                    "description": "Networks that the clinic belongs to",
                    "bsonType": "array",
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "network_id": {
                                "description": "The id of the network",
                                "bsonType": "objectId"
                            }
                        }
                    }
                },
                "service_fee_schedules": {
                    "description": "Service Fee Schedule of the clinc",
                    "bsonType": "array",
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "service_fee_schedule_id": {
                                "description": "The id of the service fee schedule",
                                "bsonType": "objectId"
                            }
                        }
                    }
                }
            },
            "required": [
                "clinic_name"
            ]
        }
    }
});

db.createCollection("contact", {
    validator:  {
        "$jsonSchema": {
            "title": "Contact",
            "description": "This document records the details of an Contact",
            "bsonType": "object",
            "properties": {
              "_id": {
                "description": "A unique identifier for an Contact",
                "bsonType": "objectId"
              },
              "name": {
                "description": "Contact name",
                "bsonType": "object",
                "properties": {
                  "prefix": {
                    "description": "Name Prefix",
                    "bsonType": "string"
                  },
                  "first_name": {
                    "description": "Name First Name",
                    "bsonType": "string"
                  },
                  "middle_name": {
                    "description": "Name Middle Name",
                    "bsonType": "string"
                  },
                  "last_name": {
                    "description": "Name Last Name",
                    "bsonType": "string"
                  },
                  "suffix": {
                    "description": "Name Suffix",
                    "bsonType": "string"
                  }
                }
              },
              "role": {
                "description": "role of the contact",
                "bsonType": "string",
                "minLength": 2
              },
              "contact_points": {
                "description": "contacts of the orginazation",
                "bsonType": "array",
                "items": {
                  "bsonType": "object",
                  "properties": {
                    "type": {
                      "description": "type of contact",
                      "bsonType": "string"
                    },
                    "system": {
                      "description": "contact system (ie. phone, fax, pager, url, sms, other)",
                      "bsonType": "string"
                    },
                    "value": {
                      "description": "The actual contact point details",
                      "bsonType": "string"
                    },
                    "rank": {
                      "description": "contact rank",
                      "bsonType": "number"
                    },
                    "status": {
                      "description": "contact status",
                      "bsonType": "string"
                    }
                  },
                  "required": [
                    "type"
                  ]
                }
              },
              "addresses": {
                "description": "addresses of the orginazation",
                "bsonType": "array",
                "items": {
                  "bsonType": "object",
                  "properties": {
                    "use": {
                      "description": "address use",
                      "bsonType": "string"
                    },
                    "type": {
                      "description": "address type",
                      "bsonType": "string"
                    },
                    "line": {
                      "description": "address line",
                      "bsonType": "string"
                    },
                    "city": {
                      "description": "address city",
                      "bsonType": "string"
                    },
                    "district": {
                      "description": "address district",
                      "bsonType": "string"
                    },
                    "postal_code": {
                      "description": "address postal code",
                      "bsonType": "string"
                    },
                    "country": {
                      "description": "address country",
                      "bsonType": "string"
                    },
                    "period": {
                      "bsonType": "object",
                      "properties": {
                        "start": {
                          "description": "Start Date Time for Address",
                          "bsonType": "date"
                        },
                        "end": {
                          "description": "End Date Time for Address",
                          "bsonType": "date"
                        }
                      }
                    }
                  },
                  "required": [
                    "type"
                  ]
                }
              },
              "period": {
                "bsonType": "object",
                "properties": {
                  "start": {
                    "description": "Start Date Time for Address",
                    "bsonType": "date"
                  },
                  "end": {
                    "description": "End Date Time for Address",
                    "bsonType": "date"
                  }
                }
              },
              "status": {
                "description": "The status of the Organizatoion",
                "bsonType": "string"
              }
            },
            "required": [
              "name"
            ]
          }
    }
});

db.createCollection("network", {
    validator:  {
        "$jsonSchema": {
            "title": "Network",
            "description": "This document records the details of a Network",
            "bsonType": "object",
            "properties": {
              "_id": {
                "description": "A unique identifier for a Network",
                "bsonType": "objectId"
              },
              "name": {
                "description": "Name of the network",
                "bsonType": "string",
                "minLength": 2
              },
              "period": {
                "bsonType": "object",
                "properties": {
                  "start": {
                    "description": "Start Date Time for Network",
                    "bsonType": "date"
                  },
                  "end": {
                    "description": "End Date Time for Network",
                    "bsonType": "date"
                  }
                }
              },
              "status": {
                "description": "The status of the Network",
                "bsonType": "string"
              }
            },
            "required": [
              "name"
            ]
          }
    }
});

db.createCollection("organization", {
    validator:  {
   "$jsonSchema": { 
        "title": "Organization",
        "description": "This document records the details of an organization",
        "bsonType": "object",
        "properties": {
            "id": {
                "description": "A unique identifier for an organization",
                "bsonType": "number"
            },
            "name": {
                "description": "name of the organization",
                "bsonType": "string",
                "minLength": 2
            },
            "contact_points": {
                "description": "contacts of the orginazation",
                "bsonType": "array",
                "items": {
                    "bsonType": "object",
                    "properties": {
                        "type": {
                            "description": "type of contact",
                            "bsonType": "string"
                        },
                        "system": {
                            "description": "contact system",
                            "bsonType": "string"
                        },
                        "value": {
                            "description": "contact value",
                            "bsonType": "string"
                        },
                        "rank": {
                            "description": "contact rank",
                            "bsonType": "number"
                        },
                        "status": {
                            "description": "contact status",
                            "bsonType": "string"
                        }
                    },
                    "required": [
                        "type"
                    ]
                }
            },
            "addresses": {
                "description": "addresses of the orginazation",
                "bsonType": "array",
                "items": {
                    "bsonType": "object",
                    "properties": {
                        "use": {
                            "description": "address use",
                            "bsonType": "string"
                        },
                        "type": {
                            "description": "address type",
                            "bsonType": "string"
                        },
                        "line": {
                            "description": "address line",
                            "bsonType": "string"
                        },
                        "city": {
                            "description": "address city",
                            "bsonType": "string"
                        },
                        "district": {
                            "description": "address district",
                            "bsonType": "string"
                        },
                        "postal_code": {
                            "description": "address postal code",
                            "bsonType": "string"
                        },
                        "country": {
                            "description": "address country",
                            "bsonType": "string"
                        },
                        "period": {
                            "bsonType": "object",
                            "properties": {
                                "start": {
                                    "description": "Start Date Time for Address",
                                    "bsonType": "date"
                                },
                                "end": {
                                    "description": "End Date Time for Address",
                                    "bsonType": "date"
                                }
                            }
                        }
                    },
                    "required": [
                        "use"
                    ]
                }
            },
            "position": {
                "description": "The geo position of the orgianization",
                "bsonType": "object",
                "properties": {
                    "latitude": {
                        "bsonType": "number",
                        "minimum": -90,
                        "maximum": 90
                    },
                    "longitude": {
                        "bsonType": "number",
                        "minimum": -180,
                        "maximum": 180
                    },
                    "altitude": {
                        "bsonType": "number"
                    }
                }
            },
            "period": {
                "bsonType": "object",
                "properties": {
                    "start": {
                        "description": "Start Date Time for Organization",
                        "bsonType": "date"
                    },
                    "end": {
                        "description": "End Date Time for Organization",
                        "bsonType": "date"
                    }
                }
            },
            "status": {
                "description": "The status of the Organizatoion",
                "bsonType": "string"
            },
            "tax_id_number": {
                "description": "The Tax Identification Number of the Organizatoion",
                "bsonType": "string"
            },
            "business_type": {
                "description": "The Business type of the Organizatoion",
                "bsonType": "string"
            }
        },
        "required": [
            "name"
        ]
    }
    }
});

db.createCollection("provider", {
    validator:  
    {
      "$jsonSchema": { 
          "title": "Provider",
          "description": "This document records the details of a provider",
          "bsonType": "object",
          "properties": {
              "_id": {
                  "description": "A unique identifier for a provider",
                  "bsonType": "objectId"
              },
              "name": {
                  "description": "Provider name",
                  "bsonType": "object",
                  "properties": {
                    "prefix": {
                      "description": "Name Prefix",
                      "bsonType": "string"
                    },
                    "first_name": {
                      "description": "Name First Name",
                      "bsonType": "string"
                    },
                    "middle_name": {
                      "description": "Name Middle Name",
                      "bsonType": "string"
                    },
                    "last_name": {
                      "description": "Name Last Name",
                      "bsonType": "string"
                    },
                    "suffix": {
                      "description": "Name Suffix",
                      "bsonType": "string"
                    }
                  }
                },
              "birthdate": {
                  "description": "birth date of the provider",
                  "bsonType": "date"
              },
              "gender": {
                  "description": "gender of the provider",
                  "bsonType": "string"
              },
              "national_provider_identifier": {
                  "description": "national identifier of the provider",
                  "bsonType": "string"
              },
              "specialties": {
                  "description": "specialties of the provider",
                  "bsonType": "array",
                  "items": {
                      "bsonType": "object",
                      "properties": {
                          "specialty_id": {
                              "description": "specialty id",
                              "bsonType": "objectId"
                          },
                          "specialty_rank": {
                              "description": "specialty rank",
                              "bsonType": "int"
                          },
                          "specialty_status": {
                              "description": "specialty status",
                              "bsonType": "string"
                          },
                          "period": {
                              "bsonType": "object",
                              "properties": {
                                  "start": {
                                      "description": "Start Date Time for the specialty",
                                      "bsonType": "date"
                                  },
                                  "end": {
                                      "description": "End Date Time for the specialty",
                                      "bsonType": "date"
                                  }
                              }
                          } 
                      }
                  }
              },
              "clinics": {
                  "description": "clinics the provider belongs to",
                  "bsonType": "array",
                  "items": {
                      "bsonType": "object",
                      "properties": {
                          "clinic_id": {
                              "description": "The ID of the clinic",
                              "bsonType": "objectId"
                          },
                          "role": {
                              "description": "provider's role at the clinic",
                              "bsonType": "string"
                          },
                          "office_hours": {
                              "description": "provider's office hours at the clinic",
                              "bsonType": "string"
                          },
                          "specialities": {
                              "description": "provider's specialties at a clinic",
                              "bsonType": "array",
                              "items": {
                                  "bsonType": "object",
                                  "properties": {
                                      "specialty_id": {
                                          "description": "specialty id",
                                          "bsonType": "objectId"
                                      }
                                  }
                              }
                          },       
                          "period": {
                              "bsonType": "object",
                              "properties": {
                                  "start": {
                                      "description": "Start Date Time for the specialty",
                                      "bsonType": "date"
                                  },
                                  "end": {
                                      "description": "End Date Time for the specialty",
                                      "bsonType": "date"
                                  }
                              }
                          } 
                      }
                  }
              },
              "tax_id_number": {
                  "description": "The Tax Identification Number of the Organizatoion",
                  "bsonType": "string"
              },
              "contact_points": {
                  "description": "contacts of the orginazation",
                  "bsonType": "array",
                  "items": {
                      "bsonType": "object",
                      "properties": {
                          "type": {
                              "description": "type of contact",
                              "bsonType": "string"
                          },
                          "system": {
                              "description": "contact system",
                              "bsonType": "string"
                          },
                          "value": {
                              "description": "contact value",
                              "bsonType": "string"
                          },
                          "rank": {
                              "description": "contact rank",
                              "bsonType": "number"
                          },
                          "status": {
                              "description": "contact status",
                              "bsonType": "string"
                          }
                      },
                      "required": [
                          "type"
                      ]
                  }
              },
              "npf_credentials": {
                  "bsonType": "array",
                  "items": {
                      "bsonType": "object",
                      "properties": {
                          "credential_name": {
                              "description": "Description of the credential",
                              "bsonType": "string"
                          },
                          "credential_value": {
                              "description": "The value of the credential",
                              "bsonType": "string"
                          },
                          "credential_description": {
                              "description": "A description for the credential",
                              "bsonType": "string"
                          },
                          "status": {
                              "description": "The status of the credential",
                              "bsonType": "string"
                          }
                      }
                  }
              },
              "networks": {
                  "description": "Networks that the clinic belongs to",
                  "bsonType": "array",
                  "items": {
                      "bsonType": "object",
                      "properties": {
                          "network_id": {
                              "description": "The id of the network",
                              "bsonType": "objectId"
                          }
                      }
                  }
              },
              "service_fee_schedules": {
                  "description": "Service Fee Schedule of the clinc",
                  "bsonType": "array",
                  "items": {
                      "bsonType": "object",
                      "properties": {
                          "service_fee_schedule_id": {
                              "description": "The id of the service fee schedule",
                              "bsonType": "objectId"
                          }
                      }
                  }
              }
          }
      }
  } 
});

db.createCollection("service-fee-schedule", {
    validator:  {
        "$jsonSchema": { 
            "$jsonSchema": {
                "title": "Service Fee Schedule",
                "description": "This document records the details of a Service Fee Schedule",
                "bsonType": "object",
                "properties": {
                  "_id": {
                    "description": "A unique identifier for a Service Fee Schedule",
                    "bsonType": "objectId"
                  },
                  "fee_schedule_type": {
                    "description": "type of the service fee schedule",
                    "bsonType": "string",
                    "minLength": 2
                  },
                  "fee_schedule_supplier": {
                    "description": "supplier of the service fee schedule",
                    "bsonType": "string",
                    "minLength": 2
                  },
                  "network": {
                    "bsonType": "objectId",
                    "description": "The network id of the service fee schedule"
                  },
                  "period": {
                    "bsonType": "object",
                    "properties": {
                      "start": {
                        "description": "Start Date Time for Service Fee Schedule",
                        "bsonType": "date"
                      },
                      "end": {
                        "description": "End Date Time for Service Fee Schedule",
                        "bsonType": "date"
                      }
                    }
                  },
                  "status": {
                    "description": "The status of the Service Fee Schedul",
                    "bsonType": "string"
                  },
                  "original_creation_date": {
                    "description": "The original creation date of the Service Fee Schedule",
                    "bsonType": "date"
                  },
                  "service_fees": {
                    "bsonType": "array",
                    "items": {
                      "bsonType": "object",
                      "properties": {
                      "service" : {
                        "bsonType": "objectId"
                      },
                      "price_amount": {
                        "bsonType": "number",
                        "description": "Price"
                      },
                      "specialty_id": {
                        "bsonType": "objectId",
                        "description": "Dental Speciality"
                      },
                      "period": {
                        "bsonType": "object",
                        "properties": {
                          "start": {
                            "description": "Start Date Time for Service Fee",
                            "bsonType": "date"
                          },
                          "end": {
                            "description": "End Date Time for Service Fee",
                            "bsonType": "date"
                          }
                        }
                      }
                    }
                    }
                  }
                },
                "required": [
                  "fee_schedule_type"
                ]
              }
        }
    }
});

db.createCollection("service", {
    validator:  {
        "$jsonSchema": {
            "title": "Service",
            "description": "This document records the details of a Service?? ",
            "bsonType": "object",
            "properties": {
              "_id": {
                "description": "A unique identifier for a Service",
                "bsonType": "objectId"
              },
              "name": {
                "description": "The name of a Service",
                "bsonType": "string"
              },
              "description": {
                "description": "The description of a Service",
                "bsonType": "string"
              },
              "industry_codes": {
                "description": "industry codes of a Service",
                "bsonType": "array",
                "items": {
                  "bsonType": "object",
                  "properties": {
                    "industry_designator": {
                      "description": "industry code industry desgnator",
                      "bsonType": "string"
                    },
                    "code": {
                      "description": "industry code code",
                      "bsonType": "string"
                    },
                    "description": {
                      "description": "industry code description",
                      "bsonType": "string"
                    }
                  },
                  "required": [
                    "code"
                  ]
                }
              },
              "period": {
                "bsonType": "object",
                "properties": {
                  "start": {
                    "description": "Start Date Time for Service",
                    "bsonType": "date"
                  },
                  "end": {
                    "description": "End Date Time for Service",
                    "bsonType": "date"
                  }
                }
              },
              "status": {
                "description": "The status of the Service",
                "bsonType": "string"
              },
              "service_type": {
                "description": "The service type of the Service??? Is this duplicate of type",
                "bsonType": "string"
              },
              "category": {
                "description": "The category of the Service",
                "bsonType": "string"
              },
              "type": {
                "description": "The type of the Service",
                "bsonType": "string"
              }
            },
            "required": [
              "name"
            ]
          }
    }
});

db.createCollection("specialty", {
    validator:  {
        "$jsonSchema": {
            "title": "Specialty",
            "description": "This document records the details of an Specialty",
            "bsonType": "object",
            "properties": {
              "_id": {
                "description": "A unique identifier for an clinic",
                "bsonType": "objectId"
            },
              "specialty_code": {
                "description": "code of the specialty",
                "bsonType": "string",
                "minLength": 2
              },
              "specialty_name": {
                "description": "name of the specialty",
                "bsonType": "string",
                "minLength": 2
              },
              "period": {
                "bsonType": "object",
                "properties": {
                  "start": {
                    "description": "Start Date Time for Specialty",
                    "bsonType": "date"
                  },
                  "end": {
                    "description": "End Date Time for Specialty",
                    "bsonType": "date"
                  }
                }
              },
              "status": {
                "description": "The status of the Specialty",
                "bsonType": "string"
              }
            },
            "required": [
              "specialty_code"
            ]
          }
    }
});