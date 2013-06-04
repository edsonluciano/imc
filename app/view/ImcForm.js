Ext.define('IMC.view.ImcForm', {
			extend : 'Ext.form.Panel',
			fullscreen : true,
			config : {
				items : [{
							xtype : 'fieldset',
							itemId: 'form',
							title : 'Cálculo do seu IMC',
							instructions : 'Insira seu peso e altura',
							items : [{
										xtype : 'textfield',
										name : 'nome',
										itemId: 'campoNome',
										label : 'Seu nome',
										placeHolder: 'seu nome',
										required: true
									}, {
										xtype : 'textfield',
										name : 'peso',
										//id: 'pesoID',
										itemId: 'campoPeso',
										label : 'Peso',
										required: true
									}, {
										xtype : 'textfield',
										name : 'altura',
										//id: 'alturaID',
										itemId: 'campoAltura',
										label : 'Altura',
										required: true
									}]
						}, {
							xtype : 'button',
							ui: 'confirm',
							text : 'Calcular',
							action: 'calcularImc'
//							handler: function(){
//								var result = Ext.getCmp("pesoID").getValue() / (Ext.getCmp("alturaID").getValue()*Ext.getCmp("alturaID").getValue());
//								if(result < 24){
//									Ext.Msg.alert("Parabéns peso ideal");
//								}
//							}
						}]
			}
		});
		
		