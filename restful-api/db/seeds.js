// This seeds.js is really a self contained program we can run with
// a script we defined in package.json: `npm run seed`

// It's job is to give our db a bunch of data before we start developing
// It connects to mongoose, inserts data, then closes the connection.
const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Animal = require('../models/Animal')
const User = require('../models/User')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        return User.create([{
          username: 'Nick',
          email: 'nick@email',
          password: 'nick',
          passwordConfirmation: 'nick'
        }])
      })
      .then(users => {
        // Insert data
        console.log(`${'🙍‍♀️'.repeat(users.length)} users created`)
        return Animal.create([
          { 'name': 'Afghanistan', 'code': 'AF', 'user': 'users[0]' },
          { 'name': 'land Islands', 'code': 'AX', 'user': 'users[0]' },

          { 'name': 'Albania', 'code': 'AL', 'user': 'users[0]' },

          { 'name': 'Algeria', 'code': 'DZ', 'user': 'users[0]' },

          { 'name': 'American Samoa', 'code': 'AS', 'user': 'users[0]' },

          { 'name': 'AndorrA', 'code': 'AD', 'user': 'users[0]' },

          { 'name': 'Angola', 'code': 'AO', 'user': 'users[0]' },

          { 'name': 'Anguilla', 'code': 'AI', 'user': 'users[0]' },

          { 'name': 'Antarctica', 'code': 'AQ', 'user': 'users[0]' },

          { 'name': 'Antigua and Barbuda', 'code': 'AG', 'user': 'users[0]' },

          { 'name': 'Argentina', 'code': 'AR', 'user': 'users[0]' },

          { 'name': 'Armenia', 'code': 'AM', 'user': 'users[0]' },

          { 'name': 'Aruba', 'code': 'AW', 'user': 'users[0]' },

          { 'name': 'Australia', 'code': 'AU', 'user': 'users[0]' },

          { 'name': 'Austria', 'code': 'AT', 'user': 'users[0]' },

          { 'name': 'Azerbaijan', 'code': 'AZ', 'user': 'users[0]' },

          { 'name': 'Bahamas', 'code': 'BS', 'user': 'users[0]' },

          { 'name': 'Bahrain', 'code': 'BH', 'user': 'users[0]' },

          { 'name': 'Bangladesh', 'code': 'BD', 'user': 'users[0]' },

          { 'name': 'Barbados', 'code': 'BB', 'user': 'users[0]' },

          { 'name': 'Belarus', 'code': 'BY', 'user': 'users[0]' },

          { 'name': 'Belgium', 'code': 'BE', 'user': 'users[0]' },

          { 'name': 'Belize', 'code': 'BZ', 'user': 'users[0]' },

          { 'name': 'Benin', 'code': 'BJ', 'user': 'users[0]' },

          { 'name': 'Bermuda', 'code': 'BM', 'user': 'users[0]' },

          { 'name': 'Bhutan', 'code': 'BT', 'user': 'users[0]' },

          { 'name': 'Bolivia', 'code': 'BO', 'user': 'users[0]' },

          { 'name': 'Bosnia and Herzegovina', 'code': 'BA', 'user': 'users[0]' },

          { 'name': 'Botswana', 'code': 'BW', 'user': 'users[0]' },

          { 'name': 'Bouvet Island', 'code': 'BV', 'user': 'users[0]' },

          { 'name': 'Brazil', 'code': 'BR', 'user': 'users[0]' },

          { 'name': 'British Indian Ocean Territory', 'code': 'IO', 'user': 'users[0]' },

          { 'name': 'Brunei Darussalam', 'code': 'BN', 'user': 'users[0]' },

          { 'name': 'Bulgaria', 'code': 'BG', 'user': 'users[0]' },

          { 'name': 'Burkina Faso', 'code': 'BF', 'user': 'users[0]' },

          { 'name': 'Burundi', 'code': 'BI', 'user': 'users[0]' },

          { 'name': 'Cambodia', 'code': 'KH', 'user': 'users[0]' },

          { 'name': 'Cameroon', 'code': 'CM', 'user': 'users[0]' },

          { 'name': 'Canada', 'code': 'CA', 'user': 'users[0]' },

          { 'name': 'Cape Verde', 'code': 'CV', 'user': 'users[0]' },

          { 'name': 'Cayman Islands', 'code': 'KY', 'user': 'users[0]' },

          { 'name': 'Central African Republic', 'code': 'CF', 'user': 'users[0]' },

          { 'name': 'Chad', 'code': 'TD', 'user': 'users[0]' },

          { 'name': 'Chile', 'code': 'CL', 'user': 'users[0]' },

          { 'name': 'China', 'code': 'CN', 'user': 'users[0]' },

          { 'name': 'Christmas Island', 'code': 'CX', 'user': 'users[0]' },

          { 'name': 'Cocos (Keeling) Islands', 'code': 'CC', 'user': 'users[0]' },

          { 'name': 'Colombia', 'code': 'CO', 'user': 'users[0]' },

          { 'name': 'Comoros', 'code': 'KM', 'user': 'users[0]' },

          { 'name': 'Congo', 'code': 'CG', 'user': 'users[0]' },

          { 'name': 'Congo, The Democratic Republic of the', 'code': 'CD', 'user': 'users[0]' },

          { 'name': 'Cook Islands', 'code': 'CK', 'user': 'users[0]' },

          { 'name': 'Costa Rica', 'code': 'CR', 'user': 'users[0]' },

          { 'name': 'Cote D"Ivoire', 'code': 'CI', 'user': 'users[0]' },

          { 'name': 'Croatia', 'code': 'HR', 'user': 'users[0]' },

          { 'name': 'Cuba', 'code': 'CU', 'user': 'users[0]' },

          { 'name': 'Cyprus', 'code': 'CY', 'user': 'users[0]' },

          { 'name': 'Czech Republic', 'code': 'CZ', 'user': 'users[0]' },

          { 'name': 'Denmark', 'code': 'DK', 'user': 'users[0]' },

          { 'name': 'Djibouti', 'code': 'DJ', 'user': 'users[0]' },

          { 'name': 'Dominica', 'code': 'DM', 'user': 'users[0]' },

          { 'name': 'Dominican Republic', 'code': 'DO', 'user': 'users[0]' },

          { 'name': 'Ecuador', 'code': 'EC', 'user': 'users[0]' },

          { 'name': 'Egypt', 'code': 'EG', 'user': 'users[0]' },

          { 'name': 'El Salvador', 'code': 'SV', 'user': 'users[0]' },

          { 'name': 'Equatorial Guinea', 'code': 'GQ', 'user': 'users[0]' },

          { 'name': 'Eritrea', 'code': 'ER', 'user': 'users[0]' },

          { 'name': 'Estonia', 'code': 'EE', 'user': 'users[0]' },

          { 'name': 'Ethiopia', 'code': 'ET', 'user': 'users[0]' },

          { 'name': 'Falkland Islands (Malvinas)', 'code': 'FK', 'user': 'users[0]' },

          { 'name': 'Faroe Islands', 'code': 'FO', 'user': 'users[0]' },

          { 'name': 'Fiji', 'code': 'FJ', 'user': 'users[0]' },

          { 'name': 'Finland', 'code': 'FI', 'user': 'users[0]' },

          { 'name': 'France', 'code': 'FR', 'user': 'users[0]' },

          { 'name': 'French Guiana', 'code': 'GF', 'user': 'users[0]' },

          { 'name': 'French Polynesia', 'code': 'PF', 'user': 'users[0]' },

          { 'name': 'French Southern Territories', 'code': 'TF', 'user': 'users[0]' },

          { 'name': 'Gabon', 'code': 'GA', 'user': 'users[0]' },

          { 'name': 'Gambia', 'code': 'GM', 'user': 'users[0]' },

          { 'name': 'Georgia', 'code': 'GE', 'user': 'users[0]' },

          { 'name': 'Germany', 'code': 'DE', 'user': 'users[0]' },

          { 'name': 'Ghana', 'code': 'GH', 'user': 'users[0]' },

          { 'name': 'Gibraltar', 'code': 'GI', 'user': 'users[0]' },

          { 'name': 'Greece', 'code': 'GR', 'user': 'users[0]' },

          { 'name': 'Greenland', 'code': 'GL', 'user': 'users[0]' },

          { 'name': 'Grenada', 'code': 'GD', 'user': 'users[0]' },

          { 'name': 'Guadeloupe', 'code': 'GP', 'user': 'users[0]' },

          { 'name': 'Guam', 'code': 'GU', 'user': 'users[0]' },

          { 'name': 'Guatemala', 'code': 'GT', 'user': 'users[0]' },

          { 'name': 'Guernsey', 'code': 'GG', 'user': 'users[0]' },

          { 'name': 'Guinea', 'code': 'GN', 'user': 'users[0]' },

          { 'name': 'Guinea-Bissau', 'code': 'GW', 'user': 'users[0]' },

          { 'name': 'Guyana', 'code': 'GY', 'user': 'users[0]' },

          { 'name': 'Haiti', 'code': 'HT', 'user': 'users[0]' },

          { 'name': 'Heard Island and Mcdonald Islands', 'code': 'HM', 'user': 'users[0]' },

          { 'name': 'Holy See (Vatican City State)', 'code': 'VA', 'user': 'users[0]' },

          { 'name': 'Honduras', 'code': 'HN', 'user': 'users[0]' },

          { 'name': 'Hong Kong', 'code': 'HK', 'user': 'users[0]' },

          { 'name': 'Hungary', 'code': 'HU', 'user': 'users[0]' },

          { 'name': 'Iceland', 'code': 'IS', 'user': 'users[0]' },

          { 'name': 'India', 'code': 'IN', 'user': 'users[0]' },

          { 'name': 'Indonesia', 'code': 'ID', 'user': 'users[0]' },

          { 'name': 'Iran, Islamic Republic Of', 'code': 'IR', 'user': 'users[0]' },

          { 'name': 'Iraq', 'code': 'IQ', 'user': 'users[0]' },

          { 'name': 'Ireland', 'code': 'IE', 'user': 'users[0]' },

          { 'name': 'Isle of Man', 'code': 'IM', 'user': 'users[0]' },

          { 'name': 'Israel', 'code': 'IL', 'user': 'users[0]' },

          { 'name': 'Italy', 'code': 'IT', 'user': 'users[0]' },

          { 'name': 'Jamaica', 'code': 'JM', 'user': 'users[0]' },

          { 'name': 'Japan', 'code': 'JP', 'user': 'users[0]' },

          { 'name': 'Jersey', 'code': 'JE', 'user': 'users[0]' },

          { 'name': 'Jordan', 'code': 'JO', 'user': 'users[0]' },

          { 'name': 'Kazakhstan', 'code': 'KZ', 'user': 'users[0]' },

          { 'name': 'Kenya', 'code': 'KE', 'user': 'users[0]' },

          { 'name': 'Kiribati', 'code': 'KI', 'user': 'users[0]' },

          { 'name': 'Korea, Democratic People"S Republic of', 'code': 'KP', 'user': 'users[0]' },

          { 'name': 'Korea, Republic of', 'code': 'KR', 'user': 'users[0]' },

          { 'name': 'Kuwait', 'code': 'KW', 'user': 'users[0]' },

          { 'name': 'Kyrgyzstan', 'code': 'KG', 'user': 'users[0]' },

          { 'name': 'Lao People"S Democratic Republic', 'code': 'LA', 'user': 'users[0]' },

          { 'name': 'Latvia', 'code': 'LV', 'user': 'users[0]' },

          { 'name': 'Lebanon', 'code': 'LB', 'user': 'users[0]' },

          { 'name': 'Lesotho', 'code': 'LS', 'user': 'users[0]' },

          { 'name': 'Liberia', 'code': 'LR', 'user': 'users[0]' },

          { 'name': 'Libyan Arab Jamahiriya', 'code': 'LY', 'user': 'users[0]' },

          { 'name': 'Liechtenstein', 'code': 'LI', 'user': 'users[0]' },

          { 'name': 'Lithuania', 'code': 'LT', 'user': 'users[0]' },

          { 'name': 'Luxembourg', 'code': 'LU', 'user': 'users[0]' },

          { 'name': 'Macao', 'code': 'MO', 'user': 'users[0]' },

          { 'name': 'Macedonia, The Former Yugoslav Republic of', 'code': 'MK', 'user': 'users[0]' },

          { 'name': 'Madagascar', 'code': 'MG', 'user': 'users[0]' },

          { 'name': 'Malawi', 'code': 'MW', 'user': 'users[0]' },

          { 'name': 'Malaysia', 'code': 'MY', 'user': 'users[0]' },

          { 'name': 'Maldives', 'code': 'MV', 'user': 'users[0]' },

          { 'name': 'Mali', 'code': 'ML', 'user': 'users[0]' },

          { 'name': 'Malta', 'code': 'MT', 'user': 'users[0]' },

          { 'name': 'Marshall Islands', 'code': 'MH', 'user': 'users[0]' },

          { 'name': 'Martinique', 'code': 'MQ', 'user': 'users[0]' },

          { 'name': 'Mauritania', 'code': 'MR', 'user': 'users[0]' },

          { 'name': 'Mauritius', 'code': 'MU', 'user': 'users[0]' },

          { 'name': 'Mayotte', 'code': 'YT', 'user': 'users[0]' },

          { 'name': 'Mexico', 'code': 'MX', 'user': 'users[0]' },

          { 'name': 'Micronesia, Federated States of', 'code': 'FM', 'user': 'users[0]' },

          { 'name': 'Moldova, Republic of', 'code': 'MD', 'user': 'users[0]' },

          { 'name': 'Monaco', 'code': 'MC', 'user': 'users[0]' },

          { 'name': 'Mongolia', 'code': 'MN', 'user': 'users[0]' },

          { 'name': 'Montenegro', 'code': 'ME', 'user': 'users[0]' },

          { 'name': 'Montserrat', 'code': 'MS', 'user': 'users[0]' },

          { 'name': 'Morocco', 'code': 'MA', 'user': 'users[0]' },

          { 'name': 'Mozambique', 'code': 'MZ', 'user': 'users[0]' },

          { 'name': 'Myanmar', 'code': 'MM', 'user': 'users[0]' },

          { 'name': 'Namibia', 'code': 'NA', 'user': 'users[0]' },

          { 'name': 'Nauru', 'code': 'NR', 'user': 'users[0]' },

          { 'name': 'Nepal', 'code': 'NP', 'user': 'users[0]' },

          { 'name': 'Netherlands', 'code': 'NL', 'user': 'users[0]' },

          { 'name': 'Netherlands Antilles', 'code': 'AN', 'user': 'users[0]' },

          { 'name': 'New Caledonia', 'code': 'NC', 'user': 'users[0]' },

          { 'name': 'New Zealand', 'code': 'NZ', 'user': 'users[0]' },

          { 'name': 'Nicaragua', 'code': 'NI', 'user': 'users[0]' },

          { 'name': 'Niger', 'code': 'NE', 'user': 'users[0]' },

          { 'name': 'Nigeria', 'code': 'NG', 'user': 'users[0]' },

          { 'name': 'Niue', 'code': 'NU', 'user': 'users[0]' },

          { 'name': 'Norfolk Island', 'code': 'NF', 'user': 'users[0]' },

          { 'name': 'Northern Mariana Islands', 'code': 'MP', 'user': 'users[0]' },

          { 'name': 'Norway', 'code': 'NO', 'user': 'users[0]' },

          { 'name': 'Oman', 'code': 'OM', 'user': 'users[0]' },

          { 'name': 'Pakistan', 'code': 'PK', 'user': 'users[0]' },

          { 'name': 'Palau', 'code': 'PW', 'user': 'users[0]' },

          { 'name': 'Palestinian Territory, Occupied', 'code': 'PS', 'user': 'users[0]' },

          { 'name': 'Panama', 'code': 'PA', 'user': 'users[0]' },

          { 'name': 'Papua New Guinea', 'code': 'PG', 'user': 'users[0]' },

          { 'name': 'Paraguay', 'code': 'PY', 'user': 'users[0]' },

          { 'name': 'Peru', 'code': 'PE', 'user': 'users[0]' },

          { 'name': 'Philippines', 'code': 'PH', 'user': 'users[0]' },

          { 'name': 'Pitcairn', 'code': 'PN', 'user': 'users[0]' },

          { 'name': 'Poland', 'code': 'PL', 'user': 'users[0]' },

          { 'name': 'Portugal', 'code': 'PT', 'user': 'users[0]' },

          { 'name': 'Puerto Rico', 'code': 'PR', 'user': 'users[0]' },

          { 'name': 'Qatar', 'code': 'QA', 'user': 'users[0]' },

          { 'name': 'Reunion', 'code': 'RE', 'user': 'users[0]' },

          { 'name': 'Romania', 'code': 'RO', 'user': 'users[0]' },

          { 'name': 'Russian Federation', 'code': 'RU', 'user': 'users[0]' },

          { 'name': 'RWANDA', 'code': 'RW', 'user': 'users[0]' },

          { 'name': 'Saint Helena', 'code': 'SH', 'user': 'users[0]' },

          { 'name': 'Saint Kitts and Nevis', 'code': 'KN', 'user': 'users[0]' },

          { 'name': 'Saint Lucia', 'code': 'LC', 'user': 'users[0]' },

          { 'name': 'Saint Pierre and Miquelon', 'code': 'PM', 'user': 'users[0]' },

          { 'name': 'Saint Vincent and the Grenadines', 'code': 'VC', 'user': 'users[0]' },

          { 'name': 'Samoa', 'code': 'WS', 'user': 'users[0]' },

          { 'name': 'San Marino', 'code': 'SM', 'user': 'users[0]' },

          { 'name': 'Sao Tome and Principe', 'code': 'ST', 'user': 'users[0]' },

          { 'name': 'Saudi Arabia', 'code': 'SA', 'user': 'users[0]' },

          { 'name': 'Senegal', 'code': 'SN', 'user': 'users[0]' },

          { 'name': 'Serbia', 'code': 'RS', 'user': 'users[0]' },

          { 'name': 'Seychelles', 'code': 'SC', 'user': 'users[0]' },

          { 'name': 'Sierra Leone', 'code': 'SL', 'user': 'users[0]' },

          { 'name': 'Singapore', 'code': 'SG', 'user': 'users[0]' },

          { 'name': 'Slovakia', 'code': 'SK', 'user': 'users[0]' },

          { 'name': 'Slovenia', 'code': 'SI', 'user': 'users[0]' },

          { 'name': 'Solomon Islands', 'code': 'SB', 'user': 'users[0]' },

          { 'name': 'Somalia', 'code': 'SO', 'user': 'users[0]' },

          { 'name': 'South Africa', 'code': 'ZA', 'user': 'users[0]' },

          { 'name': 'South Georgia and the South Sandwich Islands', 'code': 'GS', 'user': 'users[0]' },

          { 'name': 'Spain', 'code': 'ES', 'user': 'users[0]' },

          { 'name': 'Sri Lanka', 'code': 'LK', 'user': 'users[0]' },

          { 'name': 'Sudan', 'code': 'SD', 'user': 'users[0]' },

          { 'name': 'Suriname', 'code': 'SR', 'user': 'users[0]' },

          { 'name': 'Svalbard and Jan Mayen', 'code': 'SJ', 'user': 'users[0]' },

          { 'name': 'Swaziland', 'code': 'SZ', 'user': 'users[0]' },

          { 'name': 'Sweden', 'code': 'SE', 'user': 'users[0]' },

          { 'name': 'Switzerland', 'code': 'CH', 'user': 'users[0]' },

          { 'name': 'Syrian Arab Republic', 'code': 'SY', 'user': 'users[0]' },

          { 'name': 'Taiwan, Province of China', 'code': 'TW', 'user': 'users[0]' },

          { 'name': 'Tajikistan', 'code': 'TJ', 'user': 'users[0]' },

          { 'name': 'Tanzania, United Republic of', 'code': 'TZ', 'user': 'users[0]' },

          { 'name': 'Thailand', 'code': 'TH', 'user': 'users[0]' },

          { 'name': 'Timor-Leste', 'code': 'TL', 'user': 'users[0]' },

          { 'name': 'Togo', 'code': 'TG', 'user': 'users[0]' },

          { 'name': 'Tokelau', 'code': 'TK', 'user': 'users[0]' },

          { 'name': 'Tonga', 'code': 'TO', 'user': 'users[0]' },

          { 'name': 'Trinidad and Tobago', 'code': 'TT', 'user': 'users[0]' },

          { 'name': 'Tunisia', 'code': 'TN', 'user': 'users[0]' },

          { 'name': 'Turkey', 'code': 'TR', 'user': 'users[0]' },

          { 'name': 'Turkmenistan', 'code': 'TM', 'user': 'users[0]' },

          { 'name': 'Turks and Caicos Islands', 'code': 'TC', 'user': 'users[0]' },

          { 'name': 'Tuvalu', 'code': 'TV', 'user': 'users[0]' },

          { 'name': 'Uganda', 'code': 'UG', 'user': 'users[0]' },

          { 'name': 'Ukraine', 'code': 'UA', 'user': 'users[0]' },

          { 'name': 'United Arab Emirates', 'code': 'AE', 'user': 'users[0]' },

          { 'name': 'United Kingdom', 'code': 'GB', 'user': 'users[0]' },

          { 'name': 'United States', 'code': 'US', 'user': 'users[0]' },

          { 'name': 'United States Minor Outlying Islands', 'code': 'UM', 'user': 'users[0]' },

          { 'name': 'Uruguay', 'code': 'UY', 'user': 'users[0]' },

          { 'name': 'Uzbekistan', 'code': 'UZ', 'user': 'users[0]' },

          { 'name': 'Vanuatu', 'code': 'VU', 'user': 'users[0]' },

          { 'name': 'Venezuela', 'code': 'VE', 'user': 'users[0]' },

          { 'name': 'Viet Nam', 'code': 'VN', 'user': 'users[0]' },

          { 'name': 'Virgin Islands, British', 'code': 'VG', 'user': 'users[0]' },

          { 'name': 'Virgin Islands, U.S.', 'code': 'VI', 'user': 'users[0]' },

          { 'name': 'Wallis and Futuna', 'code': 'WF', 'user': 'users[0]' },

          { 'name': 'Western Sahara', 'code': 'EH', 'user': 'users[0]' },

          { 'name': 'Yemen', 'code': 'YE', 'user': 'users[0]' },

          { 'name': 'Zambia', 'code': 'ZM', 'user': 'users[0]' },

          { 'name': 'Zimbabwe', 'code': 'ZW', 'user': 'users[0]' }
        ]
        )
      })
      .then(animals => console.log(`${animals.length} Animals created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)





