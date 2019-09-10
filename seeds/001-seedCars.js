
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { id: 1, VIN: 'ABC123', MAKE: 'Tesla', MODEL: 'S', MILEAGE: 44444, TRANSMISSION_TYPE: 'Auto', TITLE_STATUS: 'Clean' },
        { id: 2, VIN: 'ABC234', MAKE: 'Tesla', MODEL: '3', MILEAGE: 22222, TRANSMISSION_TYPE: 'Auto', TITLE_STATUS: 'Salvage' },
        { id: 3, VIN: 'ABC345', MAKE: 'Tesla', MODEL: 'X', MILEAGE: 33333 },
        { id: 4, VIN: 'ABC456', MAKE: 'Chevrolet', MODEL: 'Suburban', MILEAGE: 113746, TRANSMISSION_TYPE: 'Auto', TITLE_STATUS: 'Clean' },
        { id: 5, VIN: 'ABC567', MAKE: 'Fiat', MODEL: 'Punto', MILEAGE: 96832, TRANSMISSION_TYPE: 'Manual' }
      ]);
    });
};
