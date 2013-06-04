Ext.define('IMC.controller.Imcs', {
			extend : 'Ext.app.Controller',
			config : {
				refs : {
					// Usando seletor do ComponentQuery para encontrar um
					// componente pelo [itemId]
					// itemId: 'campoNome'(essa é declaração no formulário)
					refCampoNome : '#campoNome',
					refCampoPeso : '#campoPeso',
					refCampoAltura : '#campoAltura',
					calcButton : 'button[action=calcularImc]'
					// pegando o botão através de sua propriedade action
					// definida no formulário
				},
				control : {
					// atraves da referencia(refs) defina acima, configurando o
					// método que será chamado no evento TAP
					calcButton : {
						tap : 'calcularImc'
					}
				}
			},
			calcularImc : function() {// método calcularImc chamado no TAP
				//obtendo os componentes do formulario atraves dos REFS criados acima
				var nome = this.getRefCampoNome().getValue();
				var peso = this.getRefCampoPeso().getValue();
				var altura = this.getRefCampoAltura().getValue();
				// realizando o calculo do IMC
				var total = peso / (altura * altura);
				// chamando o método [verificaResultado]
				this.verificaResultado(nome, total);

			},
			//Método que valida o resultado do calculo do IMC
			verificaResultado : function(nome, resultado) {
				
				if (resultado < 17) {
					Ext.Msg.alert('Cuidado ' + nome
							+ ', você está muito abaixo do peso!');
				} else if (resultado < 18.50) {
					Ext.Msg.alert(nome + ', você está abaixo do peso!');
				} else if (resultado < 25) {
					Ext.Msg.alert('Parabéns ' + nome
							+ ', você está peso ideal!');
				} else if (resultado < 30) {
					Ext.Msg.alert(nome + ', você está um pouco acima do peso!');
				} else if (resultado < 35) {
					Ext.Msg.alert('Ops. ' + nome
							+ ', você já está no nível 1 de obesidade!');
				} else if (resultado < 40) {
					Ext.Msg.alert('Cuide-se ' + nome
							+ ', você já está no nível 2 de obesidade!');
				} else {
					Ext.Msg.alert('Atenção ' + nome
							+ ', você já está no nível 3 de obesidade!');
				}

			}
		});