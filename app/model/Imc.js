Ext.define('IMC.model.Imc', {
			extend : 'Ext.data.Model',
			config : {
				fields : [{
							name : 'nome',
							type : 'string'
						}, {
							name : 'peso'
						}, {
							name : 'altura'
						}]

			}
		});