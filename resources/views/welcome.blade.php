<?php 
$roman_numerals = [
		'I' => '&#x2160;',				//       1,
		'V' => '&#x2164;',				//       5,
		'X' => '&#x2169;',				//      10,
		'L' => '&#x216C;',				//      50,
		'C' => '&#x216D;',				//     100,
		'D' => '&#x216E;',				//     500,
		'M' => '&#x216F;',				//    1000,
		'V|' => '&#x2181;',				//    5000,
		'X|' => '&#x2182;',				//   10000,
		'L|' => '&#x2187;',				//   50000,
		'C|' => '&#x2188;',				//  100000,
	];
?>

<!DOCTYPE html> 
<html> 
	<head> 
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Roman Numerals Convertor</title> 
        <link href="{{ asset('css/calculator.css') }}" rel="stylesheet">
        <script type="text/javascript" src="{{ asset('js/formcontrol.js') }}"></script>
	</head> 
	  
	<body> 

		<div class="page-layout">
			<div class="page-column left">

				<div class="calc-container">
					<div class="calculator-numbers" id="toRoman">
						<div class="calc-display"><input class="display" type="text" disabled></div>
						<div><input class="cancel" type="button" value="c" onclick="clr(this)"></div>
						<?php for ($x = 1; $x <= 9; $x++) { ?>
							<div><input class="btn" type="button" value="<?= $x; ?>" dis="<?= $x; ?>" onclick="dis(this)" onkeydown="myFunction(this)"></div>
						<?php } ?>
						<div><input class="btn" type="button" value="0" dis="0" onclick="dis(this)" onkeydown="myFunction(this)"></div>
						<div class="calc-convert-numbers"><input class="convert" type="button" value="Convert" onclick="convValue(this)"></div>

						<div class="calc-result-numbers"><div class="result">&nbsp;</div></div>

					</div>
				</div>
				
			</div>
			<div class="page-column right">

				<div class="calc-container">
					<div class="calculator-numerals" id="fromRoman">
						<div class="calc-display">
							<input style="display: none;" class="display" type="text" disabled> 
							<div class="view">&nbsp;</div> 
						</div>
						<div><input class="cancel" type="button" value="c" onclick="clr(this)"></div>
						<?php foreach($roman_numerals AS $val => $view_val) { ?>
							<div><input class="btn" type="button" value="<?= $view_val; ?>" dis="<?= $val; ?>" onclick="dis(this)" onkeydown="myFunction(this)"></div>
						<?php } ?>
						<div><input class="btn" type="button" value="0" dis="0" onclick="dis(this)" onkeydown="myFunction(this)"></div>
						<div class="calc-convert-numerals"><input class="convert" type="button" value="Convert" onclick="convValue(this)"></div>

						<div class="calc-result-numerals"><div class="result">&nbsp;</div></div>

					</div>
				</div>
				
			</div>
		</div>

		<div style="display: none;">
			<form action="/" method="post" id="submission">
				@csrf <!-- {{ csrf_field() }} -->
				<input type="text" name="method" id="method" value="" autocomplete="off">
				<input type="text" name="toconvert" id="toconvert" value="" autocomplete="off">
			</form>
		</div>



        <script type="text/javascript" src="{{ asset('js/calculator.js') }}"></script>
	</body> 
</html>
