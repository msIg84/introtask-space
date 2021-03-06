/**
* Выводит  траектории двжижения метеорных потоков в радиусе 3-х световых лет.
* @name Vessel.getAttention
*/
Vessel.prototype.getAttention  = function (GalaktikMeteo) {}

/**
* Подключается к межгалактическим метеорологическим спутникам.
* @param {GismeteoFlyer} спутник необходимый для получения данных
* @param (Galaktik5Pb} выбор протокола для установления высокоскоростной связи 5PiB
* @name Vessel.GalaktikMeteo
*/
Vessel.prototype.GalaktikMeteo = function (Galaktik5Pb, GismeteoFlyer) {}


/**
* Выводит остаток топлива в баках.
* @name Vessel.getFreeFuel  
*/
Vessel.prototype.getFreeFuel  = function () {}

/**
* Выводит время необходимое для перелета "без груза".
* @name Vessel.prototype.TimeCargoEmpty
*/
Vessel.prototype.TimeCargoEmpty  = function () {}

/**
* Выводит время необходимое для перелета "с грузом".
* @name Vessel.prototype.TimeCargoFull 
*/
Vessel.prototype.TimeCargoFull  = function () {}

/**
* Выводит расход топлива для перелета "без груза".
* @name Vessel.prototype.RateFuelCargoEmpty
*/
Vessel.prototype.RateFuelCargoEmpty  = function () {}

/**
* Выводит расход топлива для перелета "с грузом".
* @name Vessel.prototype.RateFuelCargoFull 
*/
Vessel.prototype.RateFuelCargoFull  = function () {}

/**
* Запоминает маршрут в "Мои маршруты".
* vessel.flyTo([1,1]);
* var earth = new Planet('Земля', [1,1]);
* vessel.flyTo(earth);
* массив маршрутов 
* var earth = [['Луна', [2,1]],['Юпитер', [4,4]],['Сатурн', [5,9]],['Меркурий', [7,1]]];
* добавляем в "мои маршруты" новый маршрут.
* MyRoutes.unshift(earth);
*/
Vessel.prototype.AddinMyRoutes () {}
/**
* Выводит из аккаунта корабля текущий остаток межгалактической валюты на счету кошелька. 
* @name Vessel.prototype.GalaktikMoneyThis 
*/
Vessel.prototype.GalaktikMoneyThis  = function () {}
