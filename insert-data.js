use northwinds;

gd_specialty_oid = new ObjectId();
db.specialty.insert (
    {
        "_id": gd_specialty_oid,
        "specialty_code": "GD-123",
        "specialty_name": "General Gentistry",
        "period": {
            "start": new Date("2021-01-01"),
            "end": new Date("2022-01-01")
        },
        "status": "ACTIVE"
    }
);
ortho_specialty_oid = new ObjectId();
db.specialty.insert (
    {
        "_id": ortho_specialty_oid,
        "specialty_code": "ORTHO-123",
        "specialty_name": "Orthodontics",
        "period": {
            "start": new Date("2021-01-01"),
            "end": new Date("2022-01-01")
        },
        "status": "ACTIVE"
    }
);
os_specialty_oid = new ObjectId();
db.specialty.insert (
    {
        "_id": os_specialty_oid,
        "specialty_code": "OS123",
        "specialty_name": "Oral Surgery",
        "period": {
            "start": new Date("2021-01-01"),
            "end": new Date("2022-01-01")
        },
        "status": "ACTIVE"
    }
);

premier_network_oid = new ObjectId();
db.network.insert(
    { 
    "_id": premier_network_oid,
    "name": "Premier",
    "period": {
        "start": new Date("2021-01-01"),
        "end": new Date("2022-01-01")
    },
    "status": "ACTIVE"
    }
    );
ppo_network_oid = new ObjectId();
db.network.insert(
    { 
    "_id": ppo_network_oid,
    "name": "PPO",
    "period": {
        "start": new Date("2021-01-01"),
        "end": new Date("2022-01-01")
    },
    "status": "ACTIVE"
    }
    );

service_oid = new ObjectId();
db.service.insert(
{
    "_id": service_oid,
    "name": "Test Service One",
    "description": "This is a test service",
    "industry_codes": [
        {
            "industry_designator": "Designator 1",
            "code": "1234",
            "description": "Industry Designator 1"
        },
        {
            "industry_designator": "Designator 2",
            "code": "4444",
            "description": "Industry Designator 2"
        }
    ],
    "period": {
        "start": new Date("2021-01-01"),
        "end": new Date("2022-01-01")
    },
    "status": "ACTIVE",
    "service_type": "Test Service Type One",
    "catetory": "Category One",
    "type": "Service Type One"
}
);

service_fee_schedule_oid = new ObjectId();
db.service_fee_schedule.insert(
    {
        "_id": service_fee_schedule_oid,
        "fee_schedule_type": "Fee Schedule Type One",
        "fee_schedule_supplier": "Fee Schedule Supplier One",
        "network": premier_network_oid,
        "period": {
            "start": new Date("2021-01-01"),
            "end": new Date("2022-01-01")
        },
        "status": "ACTIVE",
        "original_creation_date": new Date("2021-01-01"),
        "service_fees": [
            {
                "service": service_oid,
                "price_amount": 222.99,
                "specialty_id": gd_specialty_oid,
                "period": {
                    "start": new Date("2021-01-01"),
                    "end": new Date("2022-01-01")
                }
            },
            {
                "service": service_oid,
                "price_amount": 333.50,
                "specialty_id": os_specialty_oid,
                "period": {
                    "start": new Date("2021-01-01"),
                    "end": new Date("2022-01-01")
                }
            }
        ]
    }
);

contact_oid = new ObjectId();
db.contact.insert(
    {
        "_id": contact_oid,
        "name": {
            "prefix": "Mr.",
            "first_name": "Kent",
            "middle_name": "Eric",
            "last_name": "Eudy",
            "suffix": "III"
        },
        "role": "Manager",
        "contact_points": [
            {
                "type": "office",
                "system": "system",
                "value": "222-222-2222",
                "rank": 1,
                "status": "active"
            },
            {
                "type": "home",
                "system": "system",
                "value": "333-333-3333",
                "rank": 2,
                "status": "active"
            }
        ],
        "addresses": [
            {
                "use": "mail",
                "type": "office",
                "line": "123 Main Street",
                "city": "Somewhere",
                "district": "Central",
                "postal_code": "22222",
                "country": "USA",
                "period" : {
                    "start": new Date("2021-01-01"),
                    "end": new Date("2022-01-01")
                }
            }
        ],
        "period": {
            "start": new Date("2021-01-01"),
            "end": new Date("2022-01-01"),
        },
        "status": "ACTIVE"
    }
);

org_oid = new ObjectId();
db.organization.insert(
    {
        "_id": org_oid,
        "name": "Test Org One",
        "contact_points": [
            {
                "type": "office",
                "system": "system",
                "value": "222-222-2222",
                "rank": 1,
                "status": "active"
            },
            {
                "type": "home",
                "system": "system",
                "value": "333-333-3333",
                "rank": 2,
                "status": "active"
            }
        ],
        "addresses": [
            {
                "use": "mail",
                "type": "office",
                "line": "123 Main Street",
                "city": "Somewhere",
                "district": "Central",
                "postal_code": "22222",
                "country": "USA",
                "period" : {
                    "start": new Date("2021-01-01"),
                    "end": new Date("2022-01-01")
                }
            }
        ],
        "position": {
            "latitude": 45,
            "longitude": 90,
            "altitude": 1000
        },
        "period": {
            "start": new Date("2021-01-01"),
            "end": new Date("2022-01-01"),
        },
        "status": "ACTIVE",
        "tax_id_number": "12345",
        "business_type": "TEST"
    }
);

clinic1_oid = new ObjectId();
db.clinic.insert(
    {
        "_id": clinic1_oid,
        "clinic_name": "Clinic One",
        "clinic_number": 11111,
        "tax_id_number": "111111111",
        "contact_points": [
            {
                "type": "office",
                "system": "system",
                "value": "222-222-2222",
                "rank": 1,
                "status": "active"
            },
            {
                "type": "home",
                "system": "system",
                "value": "333-333-3333",
                "rank": 2,
                "status": "active"
            }
        ],
        "addresses": [
            {
                "use": "mail",
                "type": "office",
                "line": "123 Main Street",
                "city": "Somewhere",
                "district": "Central",
                "postal_code": "22222",
                "country": "USA",
                "period" : {
                    "start": new Date("2021-01-01"),
                    "end": new Date("2022-01-01")
                }
            }
        ],
        "position": {
            "latitude": 45,
            "longitude": 90,
            "altitude": 1000
        },
        "period": {
            "start": new Date("2021-01-01"),
            "end": new Date("2022-01-01")
        },
        "clinic_agreements": [
            {
                "agreement_number": 1234,
                "type": "type1",
                "description": "Test type",
                "period" : {
                    "start": new Date("2021-01-01"),
                    "end": new Date("2022-01-01")
                }
            }
        ],
        "networks": [
            {
                "network_id": premier_network_oid
            },
            {
                "network_id": ppo_network_oid
            }
        ],
        "contacts": [
            {
                "contact_id": contact_oid,
                "period" : {
                    "start": new Date("2021-01-01"),
                    "end": new Date("2022-01-01")
                }
            }
        ],
        "status": "ACTIVE"
    }
);

clinic2_oid = new ObjectId();
db.clinic.insert(
    {
        "_id": clinic2_oid,
        "clinic_name": "Clinic Two",
        "clinic_number": 22222,
        "tax_id_number": "222222222",
        "contact_points": [
            {
                "type": "office",
                "system": "system",
                "value": "222-222-2222",
                "rank": 1,
                "status": "active"
            },
            {
                "type": "home",
                "system": "system",
                "value": "333-333-3333",
                "rank": 2,
                "status": "active"
            }
        ],
        "addresses": [
            {
                "use": "mail",
                "type": "office",
                "line": "123 Main Street",
                "city": "Somewhere",
                "district": "Central",
                "postal_code": "22222",
                "country": "USA",
                "period" : {
                    "start": new Date("2021-01-01"),
                    "end": new Date("2022-01-01")
                }
            }
        ],
        "position": {
            "latitude": 45,
            "longitude": 90,
            "altitude": 1000
        },
        "period": {
            "start": new Date("2021-01-01"),
            "end": new Date("2022-01-01")
        },
        "clinic_agreements": [
            {
                "agreement_number": 1234,
                "type": "type1",
                "description": "Test type",
                "period" : {
                    "start": new Date("2021-01-01"),
                    "end": new Date("2022-01-01")
                }
            }
        ],
        "networks": [
            {
                "network_id": premier_network_oid
            }
        ],
        "contacts": [
            {
                "contact_id": contact_oid,
                "period" : {
                    "start": new Date("2021-01-01"),
                    "end": new Date("2022-01-01")
                }
            }
        ],
        "status": "ACTIVE"
    }
);

clinic3_oid = new ObjectId();
db.clinic.insert(
    {
        "_id": clinic3_oid,
        "clinic_name": "Clinic Three",
        "clinic_number": 33333,
        "tax_id_number": "333333333",
        "contact_points": [
            {
                "type": "office",
                "system": "system",
                "value": "222-222-2222",
                "rank": 1,
                "status": "active"
            },
            {
                "type": "home",
                "system": "system",
                "value": "333-333-3333",
                "rank": 2,
                "status": "active"
            }
        ],
        "addresses": [
            {
                "use": "mail",
                "type": "office",
                "line": "123 Main Street",
                "city": "Somewhere",
                "district": "Central",
                "postal_code": "22222",
                "country": "USA",
                "period" : {
                    "start": new Date("2021-01-01"),
                    "end": new Date("2022-01-01")
                }
            }
        ],
        "position": {
            "latitude": 45,
            "longitude": 90,
            "altitude": 1000
        },
        "period": {
            "start": new Date("2021-01-01"),
            "end": new Date("2022-01-01")
        },
        "clinic_agreements": [
            {
                "agreement_number": 1234,
                "type": "type1",
                "description": "Test type",
                "period" : {
                    "start": new Date("2021-01-01"),
                    "end": new Date("2022-01-01")
                }
            }
        ],
        "networks": [
            {
                "network_id": ppo_network_oid
            }
        ],
        "contacts": [
            {
                "contact_id": contact_oid,
                "period" : {
                    "start": new Date("2021-01-01"),
                    "end": new Date("2022-01-01")
                }
            }
        ],
        "status": "ACTIVE"
    }
);

provider1_oid = new ObjectId();
db.provider.insert(
    {
        "_id": provider1_oid,
        "name": {
            "prefix": "Dr.",
            "first_name": "Joe",
            "middle_name": "E",
            "last_name": "Smith",
            "suffix": "Jr."
        },
        "birthdate":   new Date("1990-01-01"),
        "gender": "male",
        "national_provider_identifier": "1234",
        "specialities": [{
            "speciality_id": gd_specialty_oid,
            "speciality_rank": 1,
            "speciality_status": "ACTIVE",
            "period": {
                "start":  new Date("2021-01-01"),
                "end": new Date("2021-02-01")
            }
        }],
        "clinics": [
            {
            "clinic_id": clinic1_oid,
            "role": "doctor",
            "office_hours": "9:00 - 5:00",
            "specialities": [{
                "specialty_id": gd_specialty_oid,
            }],
            "period": {
                "start":  new Date("2021-01-01"),
                "end": new Date("2021-02-01")
            }
            },
            {
                "clinic_id": clinic3_oid,
                "role": "doctor",
                "office_hours": "9:00 - 5:00",
                "specialities": [{
                    "specialty_id": gd_specialty_oid,
                }],
                "period": {
                    "start":  new Date("2021-01-01"),
                    "end": new Date("2021-02-01")
                }
            }
        ],
        "tax_id_number": "12345",
        "contact_points": [
            {
                "type": "office",
                "system": "system",
                "value": "222-222-2222",
                "rank": 1,
                "status": "active"
            },
            {
                "type": "home",
                "system": "system",
                "value": "333-333-3333",
                "rank": 2,
                "status": "active"
            }
        ],
        "npf_credentials": [
            {
                "credential_name": "cred1",
                "credential_value": "foo",
                "credential_description": "this is foo",
                "status": "ACTIVE"
            }
        ],
        "networks": [
            {
                "network_id": premier_network_oid
            }
        ],
        "service_fee_schedules": [
            {
                "service_fee_schedule_id": service_fee_schedule_oid
            }
        ]
    }
);

provider2_oid = new ObjectId();
db.provider.insert(
    {
        "_id": provider2_oid,
        "name": {
            "prefix": "Dr.",
            "first_name": "Jane",
            "middle_name": "E",
            "last_name": "Doe",
            "suffix": "Jr."
        },
        "birthdate":   new Date("1990-01-01"),
        "gender": "male",
        "national_provider_identifier": "1234",
        "specialities": [{
            "speciality_id": gd_specialty_oid,
            "speciality_rank": 1,
            "speciality_status": "ACTIVE",
            "period": {
                "start":  new Date("2021-01-01"),
                "end": new Date("2021-02-01")
            }
        }],
        "clinics": [
            {
                "clinic_id": clinic2_oid,
                "role": "doctor",
                "office_hours": "9:00 - 5:00",
                "specialities": [{
                    "specialty_id": gd_specialty_oid,
                }],
                "period": {
                    "start":  new Date("2021-01-01"),
                    "end": new Date("2021-02-01")
                }
                },
            {
                "clinic_id": clinic3_oid,
                "role": "doctor",
                "office_hours": "9:00 - 5:00",
                "specialities": [{
                    "specialty_id": gd_specialty_oid,
                }],
                "period": {
                    "start":  new Date("2021-01-01"),
                    "end": new Date("2021-02-01")
                }
            }
        ],
        "tax_id_number": "12345",
        "contact_points": [
            {
                "type": "office",
                "system": "system",
                "value": "222-222-2222",
                "rank": 1,
                "status": "active"
            },
            {
                "type": "home",
                "system": "system",
                "value": "333-333-3333",
                "rank": 2,
                "status": "active"
            }
        ],
        "npf_credentials": [
            {
                "credential_name": "cred1",
                "credential_value": "foo",
                "credential_description": "this is foo",
                "status": "ACTIVE"
            }
        ],
        "networks": [
            {
                "network_id": premier_network_oid
            },
            {
                "network_id": ppo_network_oid
            }
        ],
        "service_fee_schedules": [
            {
                "service_fee_schedule_id": service_fee_schedule_oid
            }
        ]
    }
);

provider3_oid = new ObjectId();
db.provider.insert(
    {
        "_id": provider3_oid,
        "name": {
            "prefix": "Dr.",
            "first_name": "Sam",
            "middle_name": "E",
            "last_name": "Johnson",
            "suffix": "Jr."
        },
        "birthdate":   new Date("1990-01-01"),
        "gender": "male",
        "national_provider_identifier": "1234",
        "specialities": [{
            "speciality_id": gd_specialty_oid,
            "speciality_rank": 1,
            "speciality_status": "ACTIVE",
            "period": {
                "start":  new Date("2021-01-01"),
                "end": new Date("2021-02-01")
            }
        }],
        "clinics": [
            {
                "clinic_id": clinic1_oid,
                "role": "doctor",
                "office_hours": "9:00 - 5:00",
                "specialities": [{
                    "specialty_id": gd_specialty_oid,
                }],
                "period": {
                    "start":  new Date("2021-01-01"),
                    "end": new Date("2021-02-01")
                }
                },
            {
                "clinic_id": clinic2_oid,
                "role": "doctor",
                "office_hours": "9:00 - 5:00",
                "specialities": [{
                    "specialty_id": gd_specialty_oid,
                }],
                "period": {
                    "start":  new Date("2021-01-01"),
                    "end": new Date("2021-02-01")
                }
            }
        ],
        "tax_id_number": "12345",
        "contact_points": [
            {
                "type": "office",
                "system": "system",
                "value": "222-222-2222",
                "rank": 1,
                "status": "active"
            },
            {
                "type": "home",
                "system": "system",
                "value": "333-333-3333",
                "rank": 2,
                "status": "active"
            }
        ],
        "npf_credentials": [
            {
                "credential_name": "cred1",
                "credential_value": "foo",
                "credential_description": "this is foo",
                "status": "ACTIVE"
            }
        ],
        "networks": [
            {
                "network_id": ppo_network_oid
            }
        ],
        "service_fee_schedules": [
            {
                "service_fee_schedule_id": service_fee_schedule_oid
            }
        ]
    }
);

interaction_oid = new ObjectId();
db.interaction.insert(
    { 
    "_id": interaction_oid,
    "benefit_verification_no": "1234567",
    "subject": {
        "identifier_type": "Type123",
        "identifier": "123"
    },
        "created_dt": new Date(2021, 01, 01, 09, 30, 0, 0),
    }
    );