# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(username: 'riverkanterman', password_digest: 'harmredux')
User.create(username: 'brooklynmedic', password_digest: 'mutualaid')

#Location Seeds
Location.create(name: "13th Avenue Pharmacy", address: "5211 13th Avenue Brooklyn 11209", phone: "(718) 871-9777)", latitude: '' , longitude: '')
Location.create(name: "21 Avenue Pharmacy and Medical Supply", address: "8511 21st Avenue Brooklyn 11214", phone: "(718) 449-4949", latitude: '', longitude: '')
Location.create(name: "A & G Pharmacy", address: "1216 Neptune Avenue Brooklyn 11224 ", phone: "(718) 996-2277", latitude: '', longitude: '')
Location.create(name: "A & H Pharmacy", address: "589 Crescent Street Brooklyn 11208", phone: "(718) 277-0573", latitude: '', longitude: '')
Location.create(name: "ABC Pharmacy", address: "371 McDonald Avenue Brooklyn 11218 ", phone: "(718) 853-7766", latitude: '', longitude: '')
Location.create(name: "Amiable Pharmacy", address: "1108 Liberty Avenue Brooklyn 11208 ", phone: "(718) 827-7528", latitude: '', longitude: '')
Location.create(name: "Archi Med Pharmacy", address: "6 Bay 50th Street Brooklyn 11214 ", phone: "(718) 333-1215", latitude: '', longitude: '')
Location.create(name: "Avenue M Pharmacy", address: "1206 Avenue M Brooklyn 11230 ", phone: "(718) 376-2836", latitude: '', longitude: '')
Location.create(name: "Bay Park Pharmacy", address: "3355 Neptune Avenue Brooklyn 11224", phone: "(718) 372-2700", latitude: '', longitude: '')
Location.create(name: "Bay Parkway Pharmacy", address: "8506 A Bay Parkway Brooklyn 11214", phone: "(718) 745-7119", latitude: '', longitude: '')
Location.create(name: "Bay Ridge Rx", address: "7119 Fifth Avenue Brooklyn 11209", phone: "(718) 745-7119", latitude: '', longitude: '')
Location.create(name: "Bayridge RX", address: "6910 3rd Avenue Brooklyn 11209", phone: "(718) 316-3003", latitude: '', longitude: '')
Location.create(name: "Bennetts Pharmacy", address: "990 Sutter Avenue Brooklyn 11208", phone: "(718) 277-0800", latitude: '', longitude: '')
Location.create(name: "Best Care Pharmacy", address: "8510 3rd Avenue Brooklyn 11209", phone: "(718) 680-9855", latitude: '', longitude: '')
Location.create(name: "Bobo Pharmacy", address: "6903 Eighteenth Avenue Brooklyn 11204", phone: "(718) 759-6308", latitude: '', longitude: '')
Location.create(name: "Bridge Pharmacy", address: "8912 Third Avenue Brooklyn 11209", phone: "(718) 836-1400", latitude: '', longitude: '')
Location.create(name: "Brighton RX", address: "227 Brighton Beach Avenue Brooklyn 11235", phone: "(718) 332-8428", latitude: '', longitude: '')
Location.create(name: "Brookdale Pharmacy", address: "2568 Linden Boulevard Brooklyn 11208", phone: "(718) 485-0070", latitude: '', longitude: '')
Location.create(name: "Brookdale Rx", address: "1275 Linden Boulevard Brooklyn 11212", phone: "(718) 240-8200", latitude: '', longitude: '')
Location.create(name: "C & J Wellness Pharmacy", address: "1425 Broadway Brooklyn 11221", phone: "(718) 443-0591", latitude: '', longitude: '')
Location.create(name: "Care Fast Pharmacy", address: "3771 Nostrand Avenue Brooklyn 11235", phone: "(718) 975-4464", latitude: '', longitude: '')
Location.create(name: "Care Max Pharmacy", address: "6721 Fort Hamilton Parkway Brooklyn 11219", phone: "(718) 833-6700", latitude: '', longitude: '')
Location.create(name: "Care Plus Pharmacy", address: "7010 Eighteenth Avenue Brooklyn 11204", phone: "(718) 256-4886", latitude: '', longitude: '')
Location.create(name: "Central Ave Pharmacy", address: "334B Central Avenue Brooklyn 11221", phone: "(718) 942-5855", latitude: '', longitude: '')